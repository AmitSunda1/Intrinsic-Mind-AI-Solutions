import { redirect } from "next/navigation";
import { primaryServicePath } from "../../components/sections/servicespage/serviceLinks";

export default function ServicesPage() {
  redirect(primaryServicePath);
}
