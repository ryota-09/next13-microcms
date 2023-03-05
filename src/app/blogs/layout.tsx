import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* サイドバー */}
      <aside>
        {/* @ts-ignore
        <BlogListStatic /> */}
        <div>
          {/* <RefreshBtn /> */}
        </div>
      </aside>
      <main>{children}</main>
    </section>
  );
}
