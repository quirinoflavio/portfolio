import PinnedRepo from "@/app/pages/shared/ui/PinnedRepo";

const GITHUB_PINNED_URL = "https://pinned.berrysauce.dev/get/";

export default async function getAsync(username: string): Promise<PinnedRepo[]> {
  try {
    const response = await fetch(`${GITHUB_PINNED_URL}${username}`, {
      next: { revalidate: 3600 },
    });
    console.log("Response:", response);

    if (!response.ok) {
      console.error(`Failed to fetch pinned repositories: ${response.statusText}`);
      return [];
    }

    const data: PinnedRepo[] = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred while fetching pinned repositories:", error);
    return [];
  }
}
