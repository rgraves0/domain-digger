import type { FC, ReactNode } from 'react';

import { Footer } from '../_components/footer';
import { Header } from '../_components/header';

type LandingLayoutProps = {
  children: ReactNode;
};

const LandingLayout: FC<LandingLayoutProps> = ({ children }) => (
  <>
    <Header showSearch={false} />
    <main className="w-full flex-1 pb-16 pt-8">{children}</main>
    <Footer />
  </>
);

export default LandingLayout;
