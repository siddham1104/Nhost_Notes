import { NhostClient } from "@nhost/nextjs";

// TODO: Update subdomain and region to your own project.
const nhost = new NhostClient({
  subdomain: "jncibumbguoebsmukuws",
  region: "eu-central-1",
});

export { nhost };
