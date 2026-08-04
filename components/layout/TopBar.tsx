import { Mail, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site";

export default function TopBar() {
  return (
    <div className="bg-green-700 text-white text-sm">

      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">

        <div className="flex gap-6">

          <span className="flex items-center gap-2">

            <Phone size={14} />

            {siteConfig.phone}

          </span>

          <span className="flex items-center gap-2">

            <Mail size={14} />

            {siteConfig.email}

          </span>

        </div>

      </div>

    </div>
  );
}
