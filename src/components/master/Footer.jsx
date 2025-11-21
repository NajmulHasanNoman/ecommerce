import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div>
<div className="section-bottom shadow-sm bg-white">
<div className="container py-5">
<div className="row">
<div className="col-md-3">
<h1 className="bodyMedium">Legals</h1>
<p className="my-2">
<Link className="nav-link" href="/about">About</Link>
</p>
<p className="my-2">
<Link className="nav-link" href="/refund">Refund Policy</Link>
</p>
<p className="my-2">
<Link className="nav-link" href="/privacy">Privacy Policy</Link>
</p>
<p className="my-2">
<Link className="nav-link" href="/terms">Terms</Link>
</p>
</div>
<div className="col-md-3">
<h1 className="bodyMedium">Information</h1>
<p className="my-2">
<Link className="nav-link" href="/how-to-buy">How to buy</Link>
</p>
<p className="my-2">
<Link className="nav-link" href="/contact">Contact</Link>
</p>
<p className="my-2">
<Link className="nav-link" href="/complain">Complain</Link>
</p>
</div>
<div className="col-md-3">
<h1 className="bodyMedium">About</h1>
<p>This is an virtual or online marketing platform developed in Next JS framework. Unique  Collections or Regular Products are available at reasonable price.   </p>
<img alt="" className="w-100" src="/images/pay.png" />
</div>
<div className="col-md-3">
<h1 className="bodyMedium">Developed by</h1>
<p>Md. Najmul Hasan Noman <br /> Web Application Developer </p>
<img alt="" className="w-100" src="../../assets/images/noman.png" />
</div>
</div>
</div>
</div>
<div className="bg-dark py-3 text-center">
<p className="text-white bodySmal">All Rights Reserved </p>

</div>
</div>
    );
};

export default Footer;