"use client";
import { createContext, useState, useContext } from "react";
interface NavigationContextType {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (open: boolean) => void;
  closeMobileNav: () => void;
}
export const NavigationContext = createContext<NavigationContextType>({
  isMobileNavOpen: false,
  setIsMobileNavOpen: () => {},
  closeMobileNav: () => {},
});
export function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);

  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <NavigationContext.Provider
      value={{ isMobileNavOpen, setIsMobileNavOpen, closeMobileNav }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
