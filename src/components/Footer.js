export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>All rights reserved @Free Will Technologies.</p>
        <p>
          <a href="mailto:julius.sxc@gmail.com">julius.sxc@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}


