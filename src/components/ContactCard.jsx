import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function ContactCard() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <Card className="bg-white dark:bg-black border dark:border-zinc-800 rounded-xl p-6">
          <CardContent className="p-0">
            <h2 className="text-2xl font-bold mb-2">Got questions?</h2>
            <p className="text-muted-foreground mb-6">
              I'm always excited to collaborate on innovative and exciting
              projects!
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-zinc-900 rounded-full p-3">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">E-mail</p>
                  <p className="text-dark dark:text-white font-medium">
                    prathameshlakare001@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="mailto:prathameshlakare001@gmail.com"
                className="inline-flex items-center justify-center rounded-md border border-input bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-black dark:focus:ring-white"
              >
                Email Me
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default ContactCard;
