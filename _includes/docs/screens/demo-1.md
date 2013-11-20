**Welcome to Clank.**

You can use this framework to prototype screens for native apps in HTML/CSS.

To do so, make new HTML files like this `index.html` file. Link them together to form a flow.

We have provided a sample flow for you to work with.

---

This is documentation for the first screen. You can edit the documentation in `/docs/screens/demo-1.md`.

You can attach a new documentation file to a new screen by editing `layouts/base.html`. The way it works is that you reference markdown files contained in `/docs/screens/` on each page:

    {% raw %}
    {% case page.docs %}
      {% when 'screen-demo-1' %}
         {% markdown docs/screens/demo-1.md %}
      {% when 'screen-demo-2' %}
         {% markdown docs/screens/demo-2.md %}
      {% else %}
        <p>No documentation for this page.</p>
    {% endcase %}
    {% endraw %}
