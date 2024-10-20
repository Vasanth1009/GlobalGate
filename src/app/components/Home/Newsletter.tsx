import React from 'react';
import { Button, ButtonGroup } from '@nextui-org/button';
export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-background">Newsletter</div>
      <h1>Subscribe Our Newsletter</h1>
      <p>Get the latest information and promo offers directly</p>
      <form>
        <input type="email" placeholder="Input email address" />
        <Button color="primary">Submit</Button>
      </form>
    </section>
  );
}
