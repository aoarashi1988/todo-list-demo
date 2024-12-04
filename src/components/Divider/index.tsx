import React from 'react';
interface DividerProps {
  height: number;
}
export default function Divider({ height }: DividerProps) {
  return <div style={{ height }} />;
}
