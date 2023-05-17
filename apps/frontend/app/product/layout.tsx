import { Metadata } from 'next';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};
export const metadata: Metadata = {
    title: 'Product',
    description: 'Product detail',
};
export default function ProductLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav></nav>

            {children}
        </section>
    );
}
