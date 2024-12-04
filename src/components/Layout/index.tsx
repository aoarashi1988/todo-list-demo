import { ReactNode } from 'react';
import './index.css';

interface LayoutProps {
  children: ReactNode;
}
export default function Layout(props: LayoutProps) {
  return <div className="layout">{props.children}</div>;
}
