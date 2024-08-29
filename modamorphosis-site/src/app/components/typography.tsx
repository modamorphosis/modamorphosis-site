import React from "react";
import { cn } from "@/utils/cn";

export const H1MainClasses = [
  "uppercase text-off-white text-[30px]/[110%] md:text-[4rem]/[100%] font-millionaire pt-3",
];

export function H1Main({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn(H1MainClasses, className)} {...props}>
      {children}
    </h1>
  );
}

export const H1SecondaryClasses = [
  "uppercase text-off-white text-[34px]/[110%] md:text-[78px]/[80%] font-alliance",
];

export function H1Secondary({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn(H1SecondaryClasses, className)} {...props}>
      {children}
    </h1>
  );
}

export const BodyClasses = [
  "text-off-white text-[14px]/[100%] md:text-[18px]/[100%] tracking-tighter font-alliance",
];

export function BodyText({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <p className={cn(BodyClasses, className)} {...props}>
      {children}
    </p>
  );
}

export const SubheadingClasses = [
  "uppercase text-off-white text-[1rem]/[110%] md:text-[2rem]/[100%] tracking-tighter font-alliance",
];

export function Subheading({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn(SubheadingClasses, className)} {...props}>
      {children}
    </h2>
  );
}

export const TitleClasses = [
  "text-off-white text-[1rem]/[100%] md:text-[1.5rem]/[100%] tracking-tight font-alliance",
];

export function Title({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn(TitleClasses, className)} {...props}>
      {children}
    </h2>
  );
}

export const DetailClasses = [
  "text-off-white md:text-[0.75rem]/[100%] tracking-tight font-alliance",
];

export function Detail({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <p className={cn(DetailClasses, className)} {...props}>
      {children}
    </p>
  );
}

export const IndexTitleClasses = [
  "text-off-white uppercase text-[3rem]/[110%] tracking-tight font-millionaire",
];

export function IndexTitle({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 className={cn(IndexTitleClasses, className)} {...props}>
      {children}
    </h1>
  );
}
