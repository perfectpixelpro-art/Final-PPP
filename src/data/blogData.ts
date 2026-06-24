import Impre1 from "../assets/Impre1.jpg";
import Impre2 from "../assets/Impre2.jpg";
import Impre3 from "../assets/Impre3.jpg";
import Impre4 from "../assets/Impre4.jpg";

export interface BlogPost {
  id: number;
  image: string;
  title: string;
  description: string;
  content: string;
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    image: Impre2,
    title: "Behind the Scenes: How We Redesigned Our Product Page",
    description:
      "A candid look at the design decisions, dead ends, and small wins behind our latest product page redesign.",
    content: `
Redesigning a product page sounds straightforward until you're three weeks in and still arguing about where the price should sit. This post walks through how our latest redesign actually came together, mess and all.

We started with research, not mockups. Watching real session recordings of customers scrolling, hesitating, and bouncing told us far more than any internal opinion about what "felt right" visually.

The biggest early mistake was trying to fix everything at once. Layout, copy, imagery, and checkout flow were all on the table simultaneously, which made it nearly impossible to tell which change was actually responsible for any improvement we saw.

Once we scoped the project down to a handful of testable changes, progress sped up considerably. Smaller, sequential tests let us isolate what mattered and quietly drop what didn't, without much internal debate.

Not every idea survived contact with real users. A bold new image gallery concept tested beautifully internally and then quietly underperformed the version it was meant to replace, a reminder that taste and performance don't always agree.

The page that shipped looks simpler than where we started, which in hindsight is usually a good sign.
`,
  },

  {
    id: 2,
    image: Impre1,
    title: "Five Tools Our Team Can't Live Without Right Now",
    description:
      "From design to deployment, here's what's quietly powering our day-to-day workflow this quarter.",
    content: `
Every few months our stack shifts a little as new tools prove themselves and old habits fade out. Here's what's actually earning its place in our workflow right now, not just what's trendy.

For design handoff, a shared component library has cut back-and-forth with engineering significantly. Half the friction in past projects came from ambiguity that a properly documented system simply removes.

On the engineering side, our deployment pipeline has gotten boring in the best way. Boring, in this case, means predictable, fast, and rarely the reason anyone's evening got ruined.

For internal communication, we've leaned harder into async updates over meetings. It took discipline to write things down properly, but it's paid off in fewer interruptions and a much better written record of decisions.

Customer feedback now flows directly into a shared backlog instead of living in scattered screenshots and forwarded emails. That single change alone has made prioritization conversations far less painful.

None of these tools are particularly flashy, which might be exactly why they've stuck around longer than the ones that were.
`,
  },

  {
    id: 3,
    image: Impre4,
    title: "What We Learned Shipping a Feature Nobody Asked For",
    description:
      "Sometimes the best features come from a hunch. Here's what happened when we built off-roadmap and shipped anyway.",
    content: `
Every roadmap has a quiet exception, the feature that wasn't requested, wasn't prioritized, and got built anyway because someone couldn't stop thinking about it. This is the story of ours.

It started as a half-finished prototype built over a weekend, mostly out of curiosity about whether an idea was even technically feasible. It was, which immediately created a new problem: now we had to decide whether it was worth pursuing.

The internal debate was split fairly evenly. Half the team saw real potential, the other half worried it would distract from committed priorities. We compromised by giving it a strict two-week window to prove itself or get shelved.

User testing during that window was more positive than almost anyone expected, including the people who built it. The feature solved a problem customers hadn't articulated clearly, but clearly felt.

Shipping it meant temporarily deprioritizing something else on the roadmap, a tradeoff that only felt justified once usage data came in and validated the bet.

The lesson wasn't that every off-roadmap idea deserves this kind of attention, but that occasionally protecting space for unplanned curiosity is worth the risk.
`,
  },

  {
    id: 4,
    image: Impre3,
    title: "A Week in the Life of Our Design Team",
    description:
      "An honest, unfiltered walkthrough of what a real week looks like for our design team, meetings and all.",
    content: `
Design work often gets portrayed as either pure inspiration or relentless grind, when in reality most weeks land somewhere far more ordinary in between. Here's what one actually looked like for us recently.

Monday started with a critique session that ran longer than scheduled, as critiques often do once people start genuinely engaging with the work instead of offering polite, surface-level feedback.

Midweek was largely heads-down execution, interrupted by the inevitable Slack thread debating whether a button should be eight or twelve pixels of padding. These conversations feel small in the moment but shape the product more than most people realize.

Thursday brought a stakeholder review that required translating design decisions into business language, a different but equally important skill from the design work itself.

Friday wrapped with documentation, the unglamorous but necessary task of making sure decisions made during the week wouldn't need to be re-litigated from scratch the following one.

None of it was particularly dramatic, but it was a fair representation of what consistent, sustainable design work actually looks like day to day.
`,
  },
];