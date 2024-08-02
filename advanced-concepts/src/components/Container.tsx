import { type ReactNode, type ElementType, type FC, type ComponentPropsWithoutRef } from "react";

type Props<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>; 

const Container = <C extends ElementType>({ as, children, ...props }: Props<C>) => {
  const Component = as || 'div';
  return (
    <Component {...props}>{children}</Component>
  );
}

export default Container;