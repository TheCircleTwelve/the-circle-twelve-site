"use client";

import type { HTMLAttributes } from "react";

type StaticMotionProps<T> = HTMLAttributes<T> & {
  initial?: unknown;
  animate?: unknown;
  whileInView?: unknown;
  viewport?: unknown;
  transition?: unknown;
};

export function MotionDiv({
  initial,
  animate,
  whileInView,
  viewport,
  transition,
  ...props
}: StaticMotionProps<HTMLDivElement>) {
  return <div {...props} />;
}

export function MotionSection({
  initial,
  animate,
  whileInView,
  viewport,
  transition,
  ...props
}: StaticMotionProps<HTMLElement>) {
  return <section {...props} />;
}
