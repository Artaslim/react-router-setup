import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <details open>
        <summary>What is the purpose of react router?</summary>
        <div class="faq__content">
          <p className="text-base">
            A tool that allows you to handle routes in a web app, using dynamic
            routing. Dynamic routing takes place as the app is rendering on your
            machine, unlike the old routing architecture where the routing is
            handled in a configuration outside of a running app. React router
            implements a component-based approach to routing.
            <br /> It provides different routing components according to the
            needs of the application and platform. The following illustration
            shows how react
            <br /> router’s dynamic routing works as compared to traditional
            static routing:
          </p>
        </div>
      </details>
      <details>
        <summary>How does context api work?</summary>
        <div class="faq__content">
          <p className="text-base">
            The React Context API was been around as an experimental feature for
            a while now but finally became safe to use in production last year,
            solving one major problem React problem — prop drilling. In this
            article, Toptal Freelance Javascript Developer Boris Yordanov will
            introduce us to the API and illustrate it with two basic web store
            apps, one built with the Context API and one without it.
          </p>
        </div>
      </details>
      <details>
        <summary>What is useref?</summary>
        <div class="faq__content">
          <p className="text-base">
            The useRef returns a mutable ref object. This object has a property
            called .current. The value is persisted in the refContainer.current
            property. These values are accessed from the current property of the
            returned object. The .current property could be initialised to the
            passed argument initialValue e.g. useRef(initialValue). The object
            can persist a value for a full lifetime of the component.{" "}
          </p>
        </div>
      </details>
    </div>
  );
};

export default Blog;
