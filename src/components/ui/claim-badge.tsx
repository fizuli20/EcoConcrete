import type { ClaimStatus } from "@/content/site";

const statusClass: Record<ClaimStatus, string> = {
  "Verified chemistry": "claim-badge claim-badge--verified",
  "Internally measured": "claim-badge claim-badge--measured",
  "Modeled estimate": "claim-badge claim-badge--modeled",
  Target: "claim-badge claim-badge--target",
  "Upcoming milestone": "claim-badge claim-badge--upcoming",
};

export function ClaimBadge({ status }: { status: ClaimStatus }) {
  return <span className={statusClass[status]}>{status}</span>;
}
