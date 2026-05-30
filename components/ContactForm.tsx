"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { budgetRanges, projectTypes } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    await new Promise((resolve) => setTimeout(resolve, 700));
    console.info("Placeholder contact submission", payload);
    setStatus("success");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel rounded-lg p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" autoComplete="name" required placeholder="Jane Smith" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" required placeholder="jane@company.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" autoComplete="organization" placeholder="Company name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(555) 123-4567" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="projectType">Project type</Label>
          <Select id="projectType" name="projectType" required placeholder="Select project type" options={projectTypes} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="budgetRange">Budget range</Label>
          <Select id="budgetRange" name="budgetRange" required placeholder="Select budget range" options={budgetRanges} />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Tell us about the workflow, product, AI system, or platform you want to build."
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Submit"}
          <Send className="ml-2 h-4 w-4" aria-hidden="true" />
        </Button>
        {status === "success" ? (
          <p role="status" className="text-sm font-medium text-emerald-300">
            Thanks. Your message was received and Denalix Tech will follow up soon.
          </p>
        ) : null}
      </div>
    </form>
  );
}
