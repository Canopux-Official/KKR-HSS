import { Text } from "@/components/ui/Text";
import { Reveal } from "@/components/ui/Reveal";
import type { ProcessStep } from "@/types/cms";

interface ProcessStepsProps {
  steps: ProcessStep[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="space-y-0">
      {steps.map((step, index) => (
        <Reveal key={step.id} delay={index * 0.06}>
          <li className="grid grid-cols-1 sm:grid-cols-[4rem_1fr] gap-4 sm:gap-8 py-8 border-t border-border first:border-t-0">
            <Text as="span" variant="overline" className="text-maroon sm:pt-1">
              {String(step.step).padStart(2, "0")}
            </Text>
            <div>
              <Text as="h3" variant="body-lg" className="font-display font-medium text-ink">
                {step.title}
              </Text>
              <Text variant="body" muted className="mt-3 max-w-prose">
                {step.description}
              </Text>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
