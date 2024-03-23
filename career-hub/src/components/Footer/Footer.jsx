const Footer = () => {
    return (
        <>
            <div className="bg-[#1A1919]">
                <footer className="footer p-10 text-white">
                    <aside>
                        <h1 className="font-black text-2xl text-white">CareerHub</h1>
                        <p className="max-w-72">There are many variations of passages of Lorem Ipsum , but the majority
                            have
                            suffered alteration in some form.</p>
                        <div>
                            <img src="assets/images/footer.png" alt=""/>
                        </div>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Work</a>
                        <a className="link link-hover">Latest News</a>
                        <a className="link link-hover">Careers</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Product</h6>
                        <a className="link link-hover">Prototype</a>
                        <a className="link link-hover">Plans & Pricing</a>
                        <a className="link link-hover">Customers</a>
                        <a className="link link-hover">Integrations </a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Support</h6>
                        <a className="link link-hover">Help Desk</a>
                        <a className="link link-hover">Sales</a>
                        <a className="link link-hover">Become a Partner</a>
                        <a className="link link-hover">Developers</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Contact</h6>
                        <a className="link link-hover">524 Broadway , NYC</a>
                        <a className="link link-hover">+1 777 - 978 - 5570</a>
                    </nav>
                </footer>
                <div className="container mx-auto">
                    <hr className="pt-12 border-t-1 border-gray-600"/>
                    <div className="flex justify-between items-center text-white pb-6">
                        <p>@2024 CareerHub. All Rights Reserved</p>
                        <p>Powered by CareerHub</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;