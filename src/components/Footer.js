export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-content">
          <p className="footer-text">All rights reserved @Free Will Technologies.</p>
          <p className="footer-email">
            <a href="mailto:julius.sxc@gmail.com">julius.sxc@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}


