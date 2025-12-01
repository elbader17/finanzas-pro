import { U as sanitize_props, V as rest_props, W as attributes, X as clsx, Y as ensure_array_like, Z as element, _ as slot, $ as bind_props, a0 as spread_props, a1 as store_get, a2 as attr_class, a3 as stringify, a4 as unsubscribe_stores, a5 as attr, a6 as attr_style } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import { b as ssr_context, f as fallback, e as escape_html } from "../../chunks/context.js";
import "chart.js/auto";
import { marked } from "marked";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
const transactions = writable([]);
const investments = writable([]);
const accounts = writable([]);
const quota = writable({ used: 0, limit: 15, remaining: 15, isUsingOwnKey: false, resetDate: null });
const settings = writable({ useOwnKey: false, hasKey: false });
const activeTab = writable("dashboard");
const aiReportText = writable(null);
const scannedImage = writable(null);
const scannedTransactions = writable([]);
const magicLoading = writable(false);
const aiLoading = writable(false);
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  $$renderer.component(($$renderer2) => {
    let name = fallback($$props["name"], void 0);
    let color = fallback($$props["color"], "currentColor");
    let size = fallback($$props["size"], 24);
    let strokeWidth = fallback($$props["strokeWidth"], 2);
    let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
    let iconNode = fallback($$props["iconNode"], () => [], true);
    const mergeClasses = (...classes) => classes.filter((className, index, array) => {
      return Boolean(className) && array.indexOf(className) === index;
    }).join(" ");
    $$renderer2.push(`<svg${attributes(
      {
        ...defaultAttributes,
        ...$$restProps,
        width: size,
        height: size,
        stroke: color,
        "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        class: clsx(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
      },
      void 0,
      void 0,
      void 0,
      3
    )}><!--[-->`);
    const each_array = ensure_array_like(iconNode);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [tag, attrs] = each_array[$$index];
      element($$renderer2, tag, () => {
        $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
      });
    }
    $$renderer2.push(`<!--]--><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></svg>`);
    bind_props($$props, {
      name,
      color,
      size,
      strokeWidth,
      absoluteStrokeWidth,
      iconNode
    });
  });
}
function Activity($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "activity" },
    $$sanitized_props,
    {
      /**
       * @component @name Activity
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjIgMTJoLTIuNDhhMiAyIDAgMCAwLTEuOTMgMS40NmwtMi4zNSA4LjM2YS4yNS4yNSAwIDAgMS0uNDggMEw5LjI0IDIuMThhLjI1LjI1IDAgMCAwLS40OCAwbC0yLjM1IDguMzZBMiAyIDAgMCAxIDQuNDkgMTJIMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/activity
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Banknote($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      { "width": "20", "height": "12", "x": "2", "y": "6", "rx": "2" }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "2" }],
    ["path", { "d": "M6 12h.01M18 12h.01" }]
  ];
  Icon($$renderer, spread_props([
    { name: "banknote" },
    $$sanitized_props,
    {
      /**
       * @component @name Banknote
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTIiIHg9IjIiIHk9IjYiIHJ4PSIyIiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjIiIC8+CiAgPHBhdGggZD0iTTYgMTJoLjAxTTE4IDEyaC4wMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/banknote
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Battery_charging($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m11 7-3 5h4l-3 5" }],
    [
      "path",
      { "d": "M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935" }
    ],
    ["path", { "d": "M22 14v-4" }],
    [
      "path",
      { "d": "M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "battery-charging" },
    $$sanitized_props,
    {
      /**
       * @component @name BatteryCharging
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTEgNy0zIDVoNGwtMyA1IiAvPgogIDxwYXRoIGQ9Ik0xNC44NTYgNkgxNmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMmgtMi45MzUiIC8+CiAgPHBhdGggZD0iTTIyIDE0di00IiAvPgogIDxwYXRoIGQ9Ik01LjE0IDE4SDRhMiAyIDAgMCAxLTItMlY4YTIgMiAwIDAgMSAyLTJoMi45MzYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/battery-charging
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Beer($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M17 11h1a3 3 0 0 1 0 6h-1" }],
    ["path", { "d": "M9 12v6" }],
    ["path", { "d": "M13 12v6" }],
    [
      "path",
      {
        "d": "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"
      }
    ],
    ["path", { "d": "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8" }]
  ];
  Icon($$renderer, spread_props([
    { name: "beer" },
    $$sanitized_props,
    {
      /**
       * @component @name Beer
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTcgMTFoMWEzIDMgMCAwIDEgMCA2aC0xIiAvPgogIDxwYXRoIGQ9Ik05IDEydjYiIC8+CiAgPHBhdGggZD0iTTEzIDEydjYiIC8+CiAgPHBhdGggZD0iTTE0IDcuNWMtMSAwLTEuNDQuNS0zIC41cy0yLS41LTMtLjUtMS43Mi41LTIuNS41YTIuNSAyLjUgMCAwIDEgMC01Yy43OCAwIDEuNTcuNSAyLjUuNVM5LjQ0IDIgMTEgMnMyIDEuNSAzIDEuNSAxLjcyLS41IDIuNS0uNWEyLjUgMi41IDAgMCAxIDAgNWMtLjc4IDAtMS41LS41LTIuNS0uNVoiIC8+CiAgPHBhdGggZD0iTTUgOHYxMmEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMlY4IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/beer
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Brain_circuit($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
      }
    ],
    ["path", { "d": "M9 13a4.5 4.5 0 0 0 3-4" }],
    ["path", { "d": "M6.003 5.125A3 3 0 0 0 6.401 6.5" }],
    ["path", { "d": "M3.477 10.896a4 4 0 0 1 .585-.396" }],
    ["path", { "d": "M6 18a4 4 0 0 1-1.967-.516" }],
    ["path", { "d": "M12 13h4" }],
    ["path", { "d": "M12 18h6a2 2 0 0 1 2 2v1" }],
    ["path", { "d": "M12 8h8" }],
    ["path", { "d": "M16 8V5a2 2 0 0 1 2-2" }],
    ["circle", { "cx": "16", "cy": "13", "r": ".5" }],
    ["circle", { "cx": "18", "cy": "3", "r": ".5" }],
    ["circle", { "cx": "20", "cy": "21", "r": ".5" }],
    ["circle", { "cx": "20", "cy": "8", "r": ".5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "brain-circuit" },
    $$sanitized_props,
    {
      /**
       * @component @name BrainCircuit
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgNWEzIDMgMCAxIDAtNS45OTcuMTI1IDQgNCAwIDAgMC0yLjUyNiA1Ljc3IDQgNCAwIDAgMCAuNTU2IDYuNTg4QTQgNCAwIDEgMCAxMiAxOFoiIC8+CiAgPHBhdGggZD0iTTkgMTNhNC41IDQuNSAwIDAgMCAzLTQiIC8+CiAgPHBhdGggZD0iTTYuMDAzIDUuMTI1QTMgMyAwIDAgMCA2LjQwMSA2LjUiIC8+CiAgPHBhdGggZD0iTTMuNDc3IDEwLjg5NmE0IDQgMCAwIDEgLjU4NS0uMzk2IiAvPgogIDxwYXRoIGQ9Ik02IDE4YTQgNCAwIDAgMS0xLjk2Ny0uNTE2IiAvPgogIDxwYXRoIGQ9Ik0xMiAxM2g0IiAvPgogIDxwYXRoIGQ9Ik0xMiAxOGg2YTIgMiAwIDAgMSAyIDJ2MSIgLz4KICA8cGF0aCBkPSJNMTIgOGg4IiAvPgogIDxwYXRoIGQ9Ik0xNiA4VjVhMiAyIDAgMCAxIDItMiIgLz4KICA8Y2lyY2xlIGN4PSIxNiIgY3k9IjEzIiByPSIuNSIgLz4KICA8Y2lyY2xlIGN4PSIxOCIgY3k9IjMiIHI9Ii41IiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iMjEiIHI9Ii41IiAvPgogIDxjaXJjbGUgY3g9IjIwIiBjeT0iOCIgcj0iLjUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/brain-circuit
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Camera($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"
      }
    ],
    ["circle", { "cx": "12", "cy": "13", "r": "3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "camera" },
    $$sanitized_props,
    {
      /**
       * @component @name Camera
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTMuOTk3IDRhMiAyIDAgMCAxIDEuNzYgMS4wNWwuNDg2LjlBMiAyIDAgMCAwIDE4LjAwMyA3SDIwYTIgMiAwIDAgMSAyIDJ2OWEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMlY5YTIgMiAwIDAgMSAyLTJoMS45OTdhMiAyIDAgMCAwIDEuNzU5LTEuMDQ4bC40ODktLjkwNEEyIDIgMCAwIDEgMTAuMDA0IDR6IiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTMiIHI9IjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/camera
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Car($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
      }
    ],
    ["circle", { "cx": "7", "cy": "17", "r": "2" }],
    ["path", { "d": "M9 17h6" }],
    ["circle", { "cx": "17", "cy": "17", "r": "2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "car" },
    $$sanitized_props,
    {
      /**
       * @component @name Car
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTkgMTdoMmMuNiAwIDEtLjQgMS0xdi0zYzAtLjktLjctMS43LTEuNS0xLjlDMTguNyAxMC42IDE2IDEwIDE2IDEwcy0xLjMtMS40LTIuMi0yLjNjLS41LS40LTEuMS0uNy0xLjgtLjdINWMtLjYgMC0xLjEuNC0xLjQuOWwtMS40IDIuOUEzLjcgMy43IDAgMCAwIDIgMTJ2NGMwIC42LjQgMSAxIDFoMiIgLz4KICA8Y2lyY2xlIGN4PSI3IiBjeT0iMTciIHI9IjIiIC8+CiAgPHBhdGggZD0iTTkgMTdoNiIgLz4KICA8Y2lyY2xlIGN4PSIxNyIgY3k9IjE3IiByPSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/car
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Chart_pie($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
      }
    ],
    ["path", { "d": "M21.21 15.89A10 10 0 1 1 8 2.83" }]
  ];
  Icon($$renderer, spread_props([
    { name: "chart-pie" },
    $$sanitized_props,
    {
      /**
       * @component @name ChartPie
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEgMTJjLjU1MiAwIDEuMDA1LS40NDkuOTUtLjk5OGExMCAxMCAwIDAgMC04Ljk1My04Ljk1MWMtLjU1LS4wNTUtLjk5OC4zOTgtLjk5OC45NXY4YTEgMSAwIDAgMCAxIDF6IiAvPgogIDxwYXRoIGQ9Ik0yMS4yMSAxNS44OUExMCAxMCAwIDEgMSA4IDIuODMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/chart-pie
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Check($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "M20 6 9 17l-5-5" }]];
  Icon($$renderer, spread_props([
    { name: "check" },
    $$sanitized_props,
    {
      /**
       * @component @name Check
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgNiA5IDE3bC01LTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/check
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Circle_check_big($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M21.801 10A10 10 0 1 1 17 3.335" }],
    ["path", { "d": "m9 11 3 3L22 4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "circle-check-big" },
    $$sanitized_props,
    {
      /**
       * @component @name CircleCheckBig
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEuODAxIDEwQTEwIDEwIDAgMSAxIDE3IDMuMzM1IiAvPgogIDxwYXRoIGQ9Im05IDExIDMgM0wyMiA0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/circle-check-big
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Circle_dollar_sign($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" }],
    ["path", { "d": "M12 18V6" }]
  ];
  Icon($$renderer, spread_props([
    { name: "circle-dollar-sign" },
    $$sanitized_props,
    {
      /**
       * @component @name CircleDollarSign
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTYgOGgtNmEyIDIgMCAxIDAgMCA0aDRhMiAyIDAgMSAxIDAgNEg4IiAvPgogIDxwYXRoIGQ9Ik0xMiAxOFY2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/circle-dollar-sign
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Crown($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"
      }
    ],
    ["path", { "d": "M5 21h14" }]
  ];
  Icon($$renderer, spread_props([
    { name: "crown" },
    $$sanitized_props,
    {
      /**
       * @component @name Crown
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEuNTYyIDMuMjY2YS41LjUgMCAwIDEgLjg3NiAwTDE1LjM5IDguODdhMSAxIDAgMCAwIDEuNTE2LjI5NEwyMS4xODMgNS41YS41LjUgMCAwIDEgLjc5OC41MTlsLTIuODM0IDEwLjI0NmExIDEgMCAwIDEtLjk1Ni43MzRINS44MWExIDEgMCAwIDEtLjk1Ny0uNzM0TDIuMDIgNi4wMmEuNS41IDAgMCAxIC43OTgtLjUxOWw0LjI3NiAzLjY2NGExIDEgMCAwIDAgMS41MTYtLjI5NHoiIC8+CiAgPHBhdGggZD0iTTUgMjFoMTQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/crown
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Ghost($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M9 10h.01" }],
    ["path", { "d": "M15 10h.01" }],
    [
      "path",
      {
        "d": "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "ghost" },
    $$sanitized_props,
    {
      /**
       * @component @name Ghost
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOSAxMGguMDEiIC8+CiAgPHBhdGggZD0iTTE1IDEwaC4wMSIgLz4KICA8cGF0aCBkPSJNMTIgMmE4IDggMCAwIDAtOCA4djEybDMtMyAyLjUgMi41TDEyIDE5bDIuNSAyLjVMMTcgMTlsMyAzVjEwYTggOCAwIDAgMC04LTh6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/ghost
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Graduation_cap($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
      }
    ],
    ["path", { "d": "M22 10v6" }],
    ["path", { "d": "M6 12.5V16a6 3 0 0 0 12 0v-3.5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "graduation-cap" },
    $$sanitized_props,
    {
      /**
       * @component @name GraduationCap
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEuNDIgMTAuOTIyYTEgMSAwIDAgMC0uMDE5LTEuODM4TDEyLjgzIDUuMThhMiAyIDAgMCAwLTEuNjYgMEwyLjYgOS4wOGExIDEgMCAwIDAgMCAxLjgzMmw4LjU3IDMuOTA4YTIgMiAwIDAgMCAxLjY2IDB6IiAvPgogIDxwYXRoIGQ9Ik0yMiAxMHY2IiAvPgogIDxwYXRoIGQ9Ik02IDEyLjVWMTZhNiAzIDAgMCAwIDEyIDB2LTMuNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/graduation-cap
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Heart($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "heart" },
    $$sanitized_props,
    {
      /**
       * @component @name Heart
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMiA5LjVhNS41IDUuNSAwIDAgMSA5LjU5MS0zLjY3Ni41Ni41NiAwIDAgMCAuODE4IDBBNS40OSA1LjQ5IDAgMCAxIDIyIDkuNWMwIDIuMjktMS41IDQtMyA1LjVsLTUuNDkyIDUuMzEzYTIgMiAwIDAgMS0zIC4wMTlMNSAxNWMtMS41LTEuNS0zLTMuMi0zLTUuNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/heart
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function House($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      { "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }
    ],
    [
      "path",
      {
        "d": "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "house" },
    $$sanitized_props,
    {
      /**
       * @component @name House
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMjF2LThhMSAxIDAgMCAwLTEtMWgtNGExIDEgMCAwIDAtMSAxdjgiIC8+CiAgPHBhdGggZD0iTTMgMTBhMiAyIDAgMCAxIC43MDktMS41MjhsNy02YTIgMiAwIDAgMSAyLjU4MiAwbDcgNkEyIDIgMCAwIDEgMjEgMTB2OWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/house
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Key($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"
      }
    ],
    ["path", { "d": "m21 2-9.6 9.6" }],
    ["circle", { "cx": "7.5", "cy": "15.5", "r": "5.5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "key" },
    $$sanitized_props,
    {
      /**
       * @component @name Key
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTUuNSA3LjUgMi4zIDIuM2ExIDEgMCAwIDAgMS40IDBsMi4xLTIuMWExIDEgMCAwIDAgMC0xLjRMMTkgNCIgLz4KICA8cGF0aCBkPSJtMjEgMi05LjYgOS42IiAvPgogIDxjaXJjbGUgY3g9IjcuNSIgY3k9IjE1LjUiIHI9IjUuNSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/key
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Landmark($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M10 18v-7" }],
    [
      "path",
      {
        "d": "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"
      }
    ],
    ["path", { "d": "M14 18v-7" }],
    ["path", { "d": "M18 18v-7" }],
    ["path", { "d": "M3 22h18" }],
    ["path", { "d": "M6 18v-7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "landmark" },
    $$sanitized_props,
    {
      /**
       * @component @name Landmark
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMTh2LTciIC8+CiAgPHBhdGggZD0iTTExLjEyIDIuMTk4YTIgMiAwIDAgMSAxLjc2LjAwNmw3Ljg2NiAzLjg0N2MuNDc2LjIzMy4zMS45NDktLjIyLjk0OUgzLjQ3NGMtLjUzIDAtLjY5NS0uNzE2LS4yMi0uOTQ5eiIgLz4KICA8cGF0aCBkPSJNMTQgMTh2LTciIC8+CiAgPHBhdGggZD0iTTE4IDE4di03IiAvPgogIDxwYXRoIGQ9Ik0zIDIyaDE4IiAvPgogIDxwYXRoIGQ9Ik02IDE4di03IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/landmark
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Layers($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
      }
    ],
    [
      "path",
      {
        "d": "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
      }
    ],
    [
      "path",
      {
        "d": "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "layers" },
    $$sanitized_props,
    {
      /**
       * @component @name Layers
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIuODMgMi4xOGEyIDIgMCAwIDAtMS42NiAwTDIuNiA2LjA4YTEgMSAwIDAgMCAwIDEuODNsOC41OCAzLjkxYTIgMiAwIDAgMCAxLjY2IDBsOC41OC0zLjlhMSAxIDAgMCAwIDAtMS44M3oiIC8+CiAgPHBhdGggZD0iTTIgMTJhMSAxIDAgMCAwIC41OC45MWw4LjYgMy45MWEyIDIgMCAwIDAgMS42NSAwbDguNTgtMy45QTEgMSAwIDAgMCAyMiAxMiIgLz4KICA8cGF0aCBkPSJNMiAxN2ExIDEgMCAwIDAgLjU4LjkxbDguNiAzLjkxYTIgMiAwIDAgMCAxLjY1IDBsOC41OC0zLjlBMSAxIDAgMCAwIDIyIDE3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/layers
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Lock($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "11",
        "x": "3",
        "y": "11",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["path", { "d": "M7 11V7a5 5 0 0 1 10 0v4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "lock" },
    $$sanitized_props,
    {
      /**
       * @component @name Lock
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTEiIHg9IjMiIHk9IjExIiByeD0iMiIgcnk9IjIiIC8+CiAgPHBhdGggZD0iTTcgMTFWN2E1IDUgMCAwIDEgMTAgMHY0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/lock
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Piggy_bank($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"
      }
    ],
    ["path", { "d": "M16 10h.01" }],
    ["path", { "d": "M2 8v1a2 2 0 0 0 2 2h1" }]
  ];
  Icon($$renderer, spread_props([
    { name: "piggy-bank" },
    $$sanitized_props,
    {
      /**
       * @component @name PiggyBank
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEgMTdoM3YyYTEgMSAwIDAgMCAxIDFoMmExIDEgMCAwIDAgMS0xdi0zYTMuMTYgMy4xNiAwIDAgMCAyLTJoMWExIDEgMCAwIDAgMS0xdi0yYTEgMSAwIDAgMC0xLTFoLTFhNSA1IDAgMCAwLTItNFYzYTQgNCAwIDAgMC0zLjIgMS42bC0uMy40SDExYTYgNiAwIDAgMC02IDZ2MWE1IDUgMCAwIDAgMiA0djNhMSAxIDAgMCAwIDEgMWgyYTEgMSAwIDAgMCAxLTF6IiAvPgogIDxwYXRoIGQ9Ik0xNiAxMGguMDEiIC8+CiAgPHBhdGggZD0iTTIgOHYxYTIgMiAwIDAgMCAyIDJoMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/piggy-bank
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Scan_line($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M3 7V5a2 2 0 0 1 2-2h2" }],
    ["path", { "d": "M17 3h2a2 2 0 0 1 2 2v2" }],
    ["path", { "d": "M21 17v2a2 2 0 0 1-2 2h-2" }],
    ["path", { "d": "M7 21H5a2 2 0 0 1-2-2v-2" }],
    ["path", { "d": "M7 12h10" }]
  ];
  Icon($$renderer, spread_props([
    { name: "scan-line" },
    $$sanitized_props,
    {
      /**
       * @component @name ScanLine
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyA3VjVhMiAyIDAgMCAxIDItMmgyIiAvPgogIDxwYXRoIGQ9Ik0xNyAzaDJhMiAyIDAgMCAxIDIgMnYyIiAvPgogIDxwYXRoIGQ9Ik0yMSAxN3YyYTIgMiAwIDAgMS0yIDJoLTIiIC8+CiAgPHBhdGggZD0iTTcgMjFINWEyIDIgMCAwIDEtMi0ydi0yIiAvPgogIDxwYXRoIGQ9Ik03IDEyaDEwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/scan-line
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Shopping_bag($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M16 10a4 4 0 0 1-8 0" }],
    ["path", { "d": "M3.103 6.034h17.794" }],
    [
      "path",
      {
        "d": "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "shopping-bag" },
    $$sanitized_props,
    {
      /**
       * @component @name ShoppingBag
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgMTBhNCA0IDAgMCAxLTggMCIgLz4KICA8cGF0aCBkPSJNMy4xMDMgNi4wMzRoMTcuNzk0IiAvPgogIDxwYXRoIGQ9Ik0zLjQgNS40NjdhMiAyIDAgMCAwLS40IDEuMlYyMGEyIDIgMCAwIDAgMiAyaDE0YTIgMiAwIDAgMCAyLTJWNi42NjdhMiAyIDAgMCAwLS40LTEuMmwtMi0yLjY2N0EyIDIgMCAwIDAgMTcgMkg3YTIgMiAwIDAgMC0xLjYuOHoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/shopping-bag
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Sparkles($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
      }
    ],
    ["path", { "d": "M20 2v4" }],
    ["path", { "d": "M22 4h-4" }],
    ["circle", { "cx": "4", "cy": "20", "r": "2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "sparkles" },
    $$sanitized_props,
    {
      /**
       * @component @name Sparkles
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEuMDE3IDIuODE0YTEgMSAwIDAgMSAxLjk2NiAwbDEuMDUxIDUuNTU4YTIgMiAwIDAgMCAxLjU5NCAxLjU5NGw1LjU1OCAxLjA1MWExIDEgMCAwIDEgMCAxLjk2NmwtNS41NTggMS4wNTFhMiAyIDAgMCAwLTEuNTk0IDEuNTk0bC0xLjA1MSA1LjU1OGExIDEgMCAwIDEtMS45NjYgMGwtMS4wNTEtNS41NThhMiAyIDAgMCAwLTEuNTk0LTEuNTk0bC01LjU1OC0xLjA1MWExIDEgMCAwIDEgMC0xLjk2Nmw1LjU1OC0xLjA1MWEyIDIgMCAwIDAgMS41OTQtMS41OTR6IiAvPgogIDxwYXRoIGQ9Ik0yMCAydjQiIC8+CiAgPHBhdGggZD0iTTIyIDRoLTQiIC8+CiAgPGNpcmNsZSBjeD0iNCIgY3k9IjIwIiByPSIyIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/sparkles
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Trash_2($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M10 11v6" }],
    ["path", { "d": "M14 11v6" }],
    ["path", { "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }],
    ["path", { "d": "M3 6h18" }],
    ["path", { "d": "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "trash-2" },
    $$sanitized_props,
    {
      /**
       * @component @name Trash2
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMTF2NiIgLz4KICA8cGF0aCBkPSJNMTQgMTF2NiIgLz4KICA8cGF0aCBkPSJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2IiAvPgogIDxwYXRoIGQ9Ik0zIDZoMTgiIC8+CiAgPHBhdGggZD0iTTggNlY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/trash-2
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Trending_up($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M16 7h6v6" }],
    ["path", { "d": "m22 7-8.5 8.5-5-5L2 17" }]
  ];
  Icon($$renderer, spread_props([
    { name: "trending-up" },
    $$sanitized_props,
    {
      /**
       * @component @name TrendingUp
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTYgN2g2djYiIC8+CiAgPHBhdGggZD0ibTIyIDctOC41IDguNS01LTVMMiAxNyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/trending-up
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Utensils($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" }],
    ["path", { "d": "M7 2v20" }],
    [
      "path",
      { "d": "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "utensils" },
    $$sanitized_props,
    {
      /**
       * @component @name Utensils
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyAydjdjMCAxLjEuOSAyIDIgMmg0YTIgMiAwIDAgMCAyLTJWMiIgLz4KICA8cGF0aCBkPSJNNyAydjIwIiAvPgogIDxwYXRoIGQ9Ik0yMSAxNVYyYTUgNSAwIDAgMC01IDV2NmMwIDEuMS45IDIgMiAyaDNabTAgMHY3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/utensils
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Wallet($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
      }
    ],
    ["path", { "d": "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "wallet" },
    $$sanitized_props,
    {
      /**
       * @component @name Wallet
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTkgN1Y0YTEgMSAwIDAgMC0xLTFINWEyIDIgMCAwIDAgMCA0aDE1YTEgMSAwIDAgMSAxIDF2NGgtM2EyIDIgMCAwIDAgMCA0aDNhMSAxIDAgMCAwIDEtMXYtMmExIDEgMCAwIDAtMS0xIiAvPgogIDxwYXRoIGQ9Ik0zIDV2MTRhMiAyIDAgMCAwIDIgMmgxNWExIDEgMCAwIDAgMS0xdi00IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/wallet
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function X($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M18 6 6 18" }],
    ["path", { "d": "m6 6 12 12" }]
  ];
  Icon($$renderer, spread_props([
    { name: "x" },
    $$sanitized_props,
    {
      /**
       * @component @name X
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA2IDE4IiAvPgogIDxwYXRoIGQ9Im02IDYgMTIgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/x
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Zap($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "zap" },
    $$sanitized_props,
    {
      /**
       * @component @name Zap
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNCAxNGExIDEgMCAwIDEtLjc4LTEuNjNsOS45LTEwLjJhLjUuNSAwIDAgMSAuODYuNDZsLTEuOTIgNi4wMkExIDEgMCAwIDAgMTMgMTBoN2ExIDEgMCAwIDEgLjc4IDEuNjNsLTkuOSAxMC4yYS41LjUgMCAwIDEtLjg2LS40NmwxLjkyLTYuMDJBMSAxIDAgMCAwIDExIDE0eiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/zap
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function getStats(transactions2, investments2, accounts2) {
  let totalIncome = 0, totalExpense = 0, investmentValue = 0, investmentCost = 0;
  const accountBalances = {};
  const expenseByCategory = {};
  accounts2.forEach((a) => accountBalances[a.name] = 0);
  transactions2.forEach((t) => {
    const amt = parseFloat(t.amount);
    if (accountBalances[t.account] === void 0) accountBalances[t.account] = 0;
    if (t.type === "income") {
      totalIncome += amt;
      accountBalances[t.account] += amt;
    } else {
      totalExpense += amt;
      accountBalances[t.account] -= amt;
      if (!expenseByCategory[t.category]) expenseByCategory[t.category] = 0;
      expenseByCategory[t.category] += amt;
    }
  });
  investments2.forEach((i) => {
    investmentValue += i.quantity * i.currentPrice;
    investmentCost += i.quantity * i.avgPrice;
  });
  return {
    totalIncome,
    totalExpense,
    balance: totalIncome - totalExpense,
    investmentValue,
    investmentCost,
    totalNetWorth: totalIncome - totalExpense + investmentValue,
    accounts: accountBalances,
    expenseByCategory
  };
}
function formatDate(dateStr) {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-");
  return `${d}/${m}`;
}
function QuotaBadge($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    if (store_get($$store_subs ??= {}, "$quota", quota).isUsingOwnKey) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="inline-flex items-center gap-1 bg-gradient-to-r from-amber-200 to-yellow-400 text-yellow-900 text-[10px] font-bold px-2 py-0.5 rounded-full border border-yellow-500/20 shadow-sm">`);
      Zap($$renderer2, { class: "w-3 h-3 fill-yellow-900" });
      $$renderer2.push(`<!----> PRO</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<span${attr_class(`inline-flex items-center gap-1 ${stringify(store_get($$store_subs ??= {}, "$quota", quota).remaining > 5 ? "bg-emerald-100 text-emerald-700" : store_get($$store_subs ??= {}, "$quota", quota).remaining > 0 ? "bg-orange-100 text-orange-700" : "bg-red-100 text-red-700")} text-[10px] font-bold px-2 py-0.5 rounded-full border border-current opacity-80`)}>`);
      Battery_charging($$renderer2, { class: "w-3 h-3" });
      $$renderer2.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$quota", quota).remaining)}/${escape_html(store_get($$store_subs ??= {}, "$quota", quota).limit)}</span>`);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Dashboard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let stats, pl, savingsRate, reportHtml;
    function initCharts() {
    }
    onDestroy(() => {
    });
    stats = getStats(store_get($$store_subs ??= {}, "$transactions", transactions), store_get($$store_subs ??= {}, "$investments", investments), store_get($$store_subs ??= {}, "$accounts", accounts));
    pl = stats.investmentValue - stats.investmentCost;
    savingsRate = stats.totalIncome > 0 ? Math.round((stats.totalIncome - stats.totalExpense) / stats.totalIncome * 100) : 0;
    reportHtml = store_get($$store_subs ??= {}, "$aiReportText", aiReportText) ? marked.parse(store_get($$store_subs ??= {}, "$aiReportText", aiReportText)) : "";
    if (stats && typeof window !== "undefined") {
      setTimeout(initCharts, 0);
    }
    $$renderer2.push(`<div class="space-y-6 fade-in pb-10"><div class="bg-gradient-to-r from-slate-800 to-indigo-900 rounded-2xl p-6 text-white shadow-xl shadow-indigo-900/20 relative overflow-hidden"><div class="absolute top-0 right-0 p-8 opacity-10">`);
    Brain_circuit($$renderer2, { class: "w-32 h-32" });
    $$renderer2.push(`<!----></div> <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10"><div><h2 class="text-2xl font-bold flex items-center gap-2">Asesor Financiero AI</h2> <p class="text-indigo-200 mt-1 text-sm max-w-md">Análisis profundo de tus patrones de gasto y salud financiera.</p> <div class="mt-2">`);
    QuotaBadge($$renderer2);
    $$renderer2.push(`<!----></div></div> <button${attr("disabled", store_get($$store_subs ??= {}, "$aiLoading", aiLoading), true)} class="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-5 py-2.5 rounded-xl font-medium shadow-lg text-sm transition-all flex items-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed">`);
    if (store_get($$store_subs ??= {}, "$aiLoading", aiLoading)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="loader border-white border-t-transparent mr-2"></div> Analizando...`);
    } else {
      $$renderer2.push("<!--[!-->");
      Sparkles($$renderer2, {
        class: "w-4 h-4 text-yellow-300 group-hover:rotate-12 transition-transform"
      });
      $$renderer2.push(`<!----> Generar Reporte`);
    }
    $$renderer2.push(`<!--]--></button></div> `);
    if (store_get($$store_subs ??= {}, "$aiReportText", aiReportText)) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="mt-6 bg-black/20 backdrop-blur-sm rounded-xl p-5 border border-white/10 text-sm leading-relaxed font-light tracking-wide text-indigo-50 relative fade-in markdown-body ai-report-dark"><button class="absolute top-3 right-3 text-indigo-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors" title="Cerrar Reporte">`);
      X($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----></button> ${html(reportHtml)}</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"><div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 relative overflow-hidden group hover:shadow-md transition-all"><div class="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-slate-600">`);
    Wallet($$renderer2, { class: "w-16 h-16" });
    $$renderer2.push(`<!----></div> <div class="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">`);
    Wallet($$renderer2, { class: "w-4 h-4 text-slate-500" });
    $$renderer2.push(`<!----> Patrimonio</div> <div class="text-2xl font-bold text-slate-800 tracking-tight">$${escape_html(stats.totalNetWorth.toLocaleString())}</div> <div class="text-xs text-slate-400 mt-1 font-medium">Activos Totales</div></div> <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 relative overflow-hidden group hover:shadow-md transition-all"><div class="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-emerald-600">`);
    Activity($$renderer2, { class: "w-16 h-16" });
    $$renderer2.push(`<!----></div> <div class="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">`);
    Activity($$renderer2, { class: "w-4 h-4 text-emerald-500" });
    $$renderer2.push(`<!----> Flujo</div> <div class="text-2xl font-bold text-slate-800 tracking-tight">$${escape_html(stats.balance.toLocaleString())}</div> <div class="text-xs text-slate-400 mt-1 font-medium">Ingresos: $${escape_html(stats.totalIncome.toLocaleString())}</div></div> <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 relative overflow-hidden group hover:shadow-md transition-all"><div class="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-violet-600">`);
    Trending_up($$renderer2, { class: "w-16 h-16" });
    $$renderer2.push(`<!----></div> <div class="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">`);
    Trending_up($$renderer2, { class: "w-4 h-4 text-violet-500" });
    $$renderer2.push(`<!----> Inversiones</div> <div class="text-2xl font-bold text-slate-800 tracking-tight">$${escape_html(stats.investmentValue.toLocaleString())}</div> <div${attr_class(`text-xs ${stringify(pl >= 0 ? "text-emerald-600" : "text-red-500")} mt-1 font-medium`)}>${escape_html(pl >= 0 ? "+" : "")}$${escape_html(pl.toLocaleString())} (G/P)</div></div> <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 relative overflow-hidden group hover:shadow-md transition-all"><div class="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-blue-600">`);
    Piggy_bank($$renderer2, { class: "w-16 h-16" });
    $$renderer2.push(`<!----></div> <div class="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">`);
    Piggy_bank($$renderer2, { class: "w-4 h-4 text-blue-500" });
    $$renderer2.push(`<!----> Ahorro</div> <div class="text-2xl font-bold text-slate-800 tracking-tight">${escape_html(savingsRate)}%</div> <div class="text-xs text-slate-400 mt-1 font-medium">Tasa Mensual</div></div></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"><div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 h-80"><h3 class="font-bold text-slate-800 mb-6 text-sm flex items-center gap-2"><div class="w-1 h-4 bg-emerald-500 rounded-full"></div> Flujo de Caja</h3> <div class="relative h-60 w-full"><canvas></canvas></div></div> <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 h-80"><h3 class="font-bold text-slate-800 mb-6 text-sm flex items-center gap-2"><div class="w-1 h-4 bg-blue-500 rounded-full"></div> Saldos por Cuenta</h3> <div class="relative h-60 w-full"><canvas></canvas></div></div> <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 h-80"><h3 class="font-bold text-slate-800 mb-6 text-sm flex items-center gap-2"><div class="w-1 h-4 bg-indigo-700 rounded-full"></div> Activos vs Pasivos (Aprox)</h3> <div class="relative h-60 w-full flex justify-center"><canvas></canvas></div></div> <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 h-80"><h3 class="font-bold text-slate-800 mb-6 text-sm flex items-center gap-2"><div class="w-1 h-4 bg-red-500 rounded-full"></div> Gastos por Categoría</h3> <div class="relative h-60 w-full flex justify-center"><canvas></canvas></div></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Scanner($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let selectedAccount = store_get($$store_subs ??= {}, "$accounts", accounts)[0]?.name || "Efectivo";
    let processing = false;
    $$renderer2.push(`<div class="bg-white rounded-2xl shadow-sm border border-emerald-100 p-5 relative overflow-hidden group"><div class="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div> <div class="flex justify-between items-start relative z-10 mb-3"><h2 class="text-sm font-bold text-emerald-900 flex items-center gap-2">`);
    Scan_line($$renderer2, { class: "w-4 h-4" });
    $$renderer2.push(`<!----> Escáner AI</h2> `);
    QuotaBadge($$renderer2);
    $$renderer2.push(`<!----></div> <div class="mb-3 relative z-10">`);
    $$renderer2.select(
      {
        value: selectedAccount,
        class: "w-full p-2 text-sm bg-emerald-50/50 border border-emerald-100 rounded-lg text-emerald-800"
      },
      ($$renderer3) => {
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$accounts", accounts));
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let acc = each_array[$$index];
          $$renderer3.option({ value: acc.name }, ($$renderer4) => {
            $$renderer4.push(`${escape_html(acc.name)}`);
          });
        }
        $$renderer3.push(`<!--]-->`);
      }
    );
    $$renderer2.push(`</div> <div${attr_class(`${stringify(store_get($$store_subs ??= {}, "$scannedImage", scannedImage) ? "hidden" : "")} border-2 border-dashed border-emerald-200 rounded-xl p-6 text-center hover:bg-emerald-50/30 transition-colors relative cursor-pointer bg-white`)}><input type="file" accept="image/*,application/pdf" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"/> <div class="bg-emerald-100 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 text-emerald-600">`);
    Camera($$renderer2, { class: "w-5 h-5" });
    $$renderer2.push(`<!----></div> <p class="text-xs text-emerald-700 font-medium">Foto o PDF de Recibo</p></div> <div${attr_class(`${stringify(store_get($$store_subs ??= {}, "$scannedImage", scannedImage) ? "" : "hidden")} space-y-3 relative z-10`)}><div class="relative rounded-lg overflow-hidden border border-emerald-100 h-32 bg-slate-50"><img${attr("src", store_get($$store_subs ??= {}, "$scannedImage", scannedImage))} alt="Preview" class="w-full h-full object-contain"/> <button class="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-red-500 backdrop-blur-sm">`);
    X($$renderer2, { class: "w-3 h-3" });
    $$renderer2.push(`<!----></button></div> <button${attr("disabled", processing, true)} class="w-full bg-emerald-600 text-white py-2 rounded-lg text-xs font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all disabled:opacity-70">${escape_html("Procesar Imagen")}</button> `);
    if (store_get($$store_subs ??= {}, "$scannedTransactions", scannedTransactions).length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="flex gap-2"><button class="flex-1 bg-emerald-50 text-emerald-700 py-2 rounded-lg text-xs font-bold border border-emerald-200 hover:bg-emerald-100">Guardar Todo</button></div> <div class="max-h-40 overflow-y-auto space-y-2 pr-1 custom-scrollbar"><!--[-->`);
      const each_array_1 = ensure_array_like(store_get($$store_subs ??= {}, "$scannedTransactions", scannedTransactions));
      for (let idx = 0, $$length = each_array_1.length; idx < $$length; idx++) {
        let item = each_array_1[idx];
        $$renderer2.push(`<div class="bg-slate-50 p-2 rounded border border-slate-200 text-xs flex justify-between items-center"><div class="truncate mr-2 font-medium text-slate-700">${escape_html(item.description)}</div> <div class="flex gap-2 items-center"><span class="font-bold text-slate-900">$${escape_html(item.amount)}</span> <button class="p-1 bg-emerald-100 text-emerald-700 rounded hover:bg-emerald-200">`);
        Check($$renderer2, { class: "w-3 h-3" });
        $$renderer2.push(`<!----></button></div></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function CategoryIcon($$renderer, $$props) {
  let category = $$props["category"];
  const map = {
    "Comida": Utensils,
    "Transporte": Car,
    "Servicios": Zap,
    "Ocio": Beer,
    "Salud": Heart,
    "Sueldo": Banknote,
    "Ventas": Shopping_bag,
    "Hogar": House,
    "Educación": Graduation_cap
  };
  $$renderer.push(`<!---->`);
  (map[category] || Circle_dollar_sign)?.($$renderer, { class: "w-5 h-5" });
  $$renderer.push(`<!---->`);
  bind_props($$props, { category });
}
function Transactions($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let magicInput = "";
    let amount = "";
    let desc = "";
    let account = "";
    let category = "Comida";
    let date = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    if (store_get($$store_subs ??= {}, "$accounts", accounts).length > 0 && !account) account = store_get($$store_subs ??= {}, "$accounts", accounts)[0].name;
    $$renderer2.push(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 fade-in pb-20"><div class="lg:col-span-1 space-y-4">`);
    Scanner($$renderer2);
    $$renderer2.push(`<!----> <div class="bg-white rounded-2xl shadow-sm border border-indigo-100 p-5 relative overflow-hidden"><h2 class="text-sm font-bold text-indigo-900 mb-2 flex items-center gap-2">`);
    Sparkles($$renderer2, { class: "w-4 h-4 text-indigo-700" });
    $$renderer2.push(`<!----> Entrada Mágica</h2> <textarea placeholder="Ej: Almuerzo en McDonald's $15 con tarjeta de débito" class="w-full p-3 text-sm bg-indigo-50/30 border border-indigo-100 rounded-xl focus:ring-2 focus:ring-indigo-700 resize-none h-20 mb-3 transition-all">`);
    const $$body = escape_html(magicInput);
    if ($$body) {
      $$renderer2.push(`${$$body}`);
    }
    $$renderer2.push(`</textarea> <button${attr("disabled", store_get($$store_subs ??= {}, "$magicLoading", magicLoading), true)} class="w-full bg-indigo-700 text-white py-2 rounded-lg text-xs font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-800 transition-all disabled:opacity-70">${escape_html(store_get($$store_subs ??= {}, "$magicLoading", magicLoading) ? "Interpretando..." : "Auto-Completar")}</button></div> <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sticky top-24"><h2 class="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">Entrada Manual</h2> <form class="flex flex-col gap-4"><div class="flex bg-slate-100 p-1 rounded-xl"><button type="button"${attr_class(`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${stringify(
      "bg-white text-red-500 shadow-sm transform scale-105"
    )}`)}>Gasto</button> <button type="button"${attr_class(`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${stringify("text-slate-400 hover:bg-slate-200/50")}`)}>Ingreso</button></div> <div class="flex flex-col gap-1 w-full"><label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1" for="t-amount">Monto</label> <input type="number" id="t-amount"${attr("value", amount)} placeholder="0.00" step="0.01" class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm transition-all"/></div> <div class="flex flex-col gap-1 w-full"><label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1" for="t-desc">Descripción</label> <input type="text" id="t-desc"${attr("value", desc)} placeholder="Ej: Supermercado" class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm transition-all"/></div> <div class="grid grid-cols-2 gap-3"><div class="flex flex-col gap-1 w-full"><label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1" for="t-account">Cuenta</label> `);
    $$renderer2.select(
      {
        id: "t-account",
        value: account,
        class: "w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm"
      },
      ($$renderer3) => {
        $$renderer3.push(`<!--[-->`);
        const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$accounts", accounts));
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let acc = each_array[$$index];
          $$renderer3.option({ value: acc.name }, ($$renderer4) => {
            $$renderer4.push(`${escape_html(acc.name)}`);
          });
        }
        $$renderer3.push(`<!--]-->`);
      }
    );
    $$renderer2.push(`</div> <div class="flex flex-col gap-1 w-full"><label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1" for="t-cat">Categoría</label> `);
    $$renderer2.select(
      {
        id: "t-cat",
        value: category,
        class: "w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm transition-all"
      },
      ($$renderer3) => {
        $$renderer3.push(`<!--[-->`);
        const each_array_1 = ensure_array_like([
          "Comida",
          "Transporte",
          "Servicios",
          "Ocio",
          "Salud",
          "Sueldo",
          "Ventas",
          "Hogar",
          "Educación",
          "Otros"
        ]);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let cat = each_array_1[$$index_1];
          $$renderer3.option({ value: cat }, ($$renderer4) => {
            $$renderer4.push(`${escape_html(cat)}`);
          });
        }
        $$renderer3.push(`<!--]-->`);
      }
    );
    $$renderer2.push(`</div></div> <div class="flex flex-col gap-1 w-full"><label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1" for="t-date">Fecha</label> <input type="date" id="t-date"${attr("value", date)} class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm transition-all"/></div> <button type="submit" class="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 shadow-lg transition-all mt-2">Guardar</button></form></div></div> <div class="lg:col-span-2"><div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden h-full min-h-[500px]"><div class="p-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center sticky top-0 backdrop-blur-sm z-10"><h3 class="font-bold text-slate-700 text-sm uppercase tracking-wide">Historial Reciente</h3> <span class="text-xs bg-white border border-slate-200 px-2 py-1 rounded-md text-slate-500 font-mono">${escape_html(store_get($$store_subs ??= {}, "$transactions", transactions).length)}</span></div> <div class="divide-y divide-slate-50 max-h-[800px] overflow-y-auto custom-scrollbar">`);
    if (store_get($$store_subs ??= {}, "$transactions", transactions).length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="p-10 text-center text-slate-400 flex flex-col items-center">`);
      Ghost($$renderer2, { class: "w-10 h-10 mb-2 opacity-50" });
      $$renderer2.push(`<!----> Sin movimientos</div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!--[-->`);
      const each_array_2 = ensure_array_like(store_get($$store_subs ??= {}, "$transactions", transactions));
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let t = each_array_2[$$index_2];
        $$renderer2.push(`<div class="p-4 hover:bg-slate-50 flex justify-between items-center group transition-all"><div class="flex items-center gap-4"><div${attr_class(`w-10 h-10 rounded-full flex items-center justify-center ${stringify(t.type === "income" ? "bg-emerald-100 text-emerald-600" : "bg-red-50 text-red-500")} shrink-0`)}>`);
        CategoryIcon($$renderer2, { category: t.category });
        $$renderer2.push(`<!----></div> <div class="min-w-0"><p class="font-bold text-slate-800 text-sm truncate pr-2">${escape_html(t.description)}</p> <p class="text-xs text-slate-400 flex items-center gap-1"><span>${escape_html(formatDate(t.date))}</span><span class="w-1 h-1 rounded-full bg-slate-300"></span><span>${escape_html(t.account)}</span></p></div></div> <div class="text-right flex items-center gap-3 shrink-0"><span${attr_class(`font-bold text-sm ${stringify(t.type === "income" ? "text-emerald-600" : "text-slate-800")}`)}>${escape_html(t.type === "income" ? "+" : "-")}$${escape_html(parseFloat(t.amount).toLocaleString())}</span> <button class="text-slate-300 hover:text-red-500 p-1.5 hover:bg-red-50 rounded-lg transition-colors">`);
        Trash_2($$renderer2, { class: "w-4 h-4" });
        $$renderer2.push(`<!----></button></div></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Investments($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let symbol = "AAPL";
    let name = "Apple";
    let qty = 10;
    let price = 150;
    let advice = {};
    $$renderer2.push(`<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 fade-in pb-20"><div class="lg:col-span-1"><div class="bg-white rounded-2xl shadow-sm border border-violet-100 p-6 sticky top-24"><h2 class="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">`);
    Layers($$renderer2, { class: "text-violet-600 w-4 h-4" });
    $$renderer2.push(`<!----> Nueva Posición</h2> <form class="flex flex-col gap-4"><div class="grid grid-cols-2 gap-3"><div class="flex flex-col gap-1 w-full"><label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1" for="inv-symbol">Símbolo</label> <input type="text" id="inv-symbol"${attr("value", symbol)} class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm transition-all uppercase"/></div> <div class="flex flex-col gap-1 w-full"><label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1" for="inv-name">Nombre</label> <input type="text" id="inv-name"${attr("value", name)} class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm transition-all"/></div></div> <div class="flex flex-col gap-1 w-full"><label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1" for="inv-qty">Cantidad</label> <input type="number" id="inv-qty"${attr("value", qty)} step="any" class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm transition-all"/></div> <div class="flex flex-col gap-1 w-full"><label class="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1" for="inv-price">Precio Unit.</label> <input type="number" id="inv-price"${attr("value", price)} step="0.01" class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm transition-all"/></div> <button type="submit" class="w-full bg-violet-600 text-white py-3 rounded-xl font-bold hover:bg-violet-700 shadow-lg shadow-violet-200 transition-all mt-2">Agregar</button></form></div></div> <div class="lg:col-span-2 space-y-4">`);
    if (store_get($$store_subs ??= {}, "$investments", investments).length === 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-white p-16 rounded-2xl text-center text-slate-400 border border-slate-100 border-dashed">`);
      Chart_pie($$renderer2, { class: "w-12 h-12 mb-3 mx-auto opacity-30" });
      $$renderer2.push(`<!----> <p>Portafolio vacío</p></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<!--[-->`);
      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$investments", investments));
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let inv = each_array[$$index];
        const totalCost = inv.quantity * inv.avgPrice;
        const curVal = inv.quantity * inv.currentPrice;
        const pl = curVal - totalCost;
        const plPercent = totalCost ? (pl / totalCost * 100).toFixed(2) : 0;
        const isPos = pl >= 0;
        $$renderer2.push(`<div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 relative hover:shadow-md transition-shadow group"><div class="flex flex-col sm:flex-row justify-between sm:items-center gap-4"><div class="flex items-center gap-4"><div class="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center font-bold text-slate-700 border border-slate-100">${escape_html(inv.symbol.substring(0, 3))}</div> <div><h3 class="text-lg font-bold text-slate-800">${escape_html(inv.symbol)}</h3><p class="text-xs text-slate-500">${escape_html(inv.name)}</p></div></div> <div class="flex items-center gap-6"><div class="text-right hidden sm:block"><p class="text-[10px] font-bold text-slate-400 uppercase">Tenencia</p><p class="font-mono font-medium text-slate-700">${escape_html(inv.quantity)} <span class="text-xs text-slate-400">@ $${escape_html(inv.avgPrice.toFixed(0))}</span></p></div> <div class="text-right"><p class="text-[10px] font-bold text-slate-400 uppercase">Precio</p><button class="font-bold text-slate-900 border-b border-dashed border-slate-300 hover:text-indigo-700 hover:border-indigo-700 transition-colors">$${escape_html(inv.currentPrice.toFixed(2))}</button></div> <div class="text-right w-24"><div${attr_class(`font-bold text-lg ${stringify(isPos ? "text-emerald-600" : "text-red-500")}`)}>${escape_html(isPos ? "+" : "")}${escape_html(plPercent)}%</div><p class="text-xs text-slate-400">$${escape_html(pl.toFixed(0))}</p></div></div></div> <div class="border-t border-slate-50 pt-3 mt-4 flex justify-between items-center"><button class="text-xs text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-lg hover:bg-indigo-100 font-medium transition-colors flex items-center gap-1.5">`);
        Sparkles($$renderer2, { class: "w-3 h-3" });
        $$renderer2.push(`<!----> Análisis AI</button> <button class="text-slate-300 hover:text-red-500 transition-colors">`);
        Trash_2($$renderer2, { class: "w-4 h-4" });
        $$renderer2.push(`<!----></button></div> `);
        if (advice[inv.id]) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="mt-3 bg-gradient-to-r from-indigo-50 to-violet-50 p-3 rounded-lg text-xs text-indigo-900 border border-indigo-100 leading-relaxed animate-pulse">${escape_html(advice[inv.id])}</div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Accounts($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let newAccName = "";
    $$renderer2.push(`<div class="max-w-3xl mx-auto space-y-6 fade-in pb-20"><div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6"><h2 class="text-lg font-bold text-slate-800 mb-4">Agregar Cuenta</h2> <form class="flex gap-3"><input type="text"${attr("value", newAccName)} placeholder="Ej: Billetera Crypto" class="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 transition-all"/> <button type="submit" class="bg-indigo-700 text-white px-6 py-2 rounded-xl font-medium hover:bg-indigo-800 shadow-lg shadow-indigo-200 transition-all">Crear</button></form></div> <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"><div class="p-5 border-b border-slate-100 bg-slate-50/50"><h3 class="font-bold text-slate-700 text-sm uppercase tracking-wide">Mis Cuentas</h3></div> <div class="divide-y divide-slate-100"><!--[-->`);
    const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$accounts", accounts));
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let acc = each_array[$$index];
      $$renderer2.push(`<div class="p-5 flex justify-between items-center hover:bg-slate-50 transition-colors group"><div class="flex items-center gap-4"><div class="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-700">`);
      Landmark($$renderer2, { class: "w-5 h-5" });
      $$renderer2.push(`<!----></div> <span class="font-medium text-slate-800">${escape_html(acc.name)}</span></div> <div class="flex gap-1"><button class="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">`);
      Trash_2($$renderer2, { class: "w-4 h-4" });
      $$renderer2.push(`<!----></button></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Settings($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let useOwnKey = store_get($$store_subs ??= {}, "$settings", settings).useOwnKey;
    let apiKey = "";
    useOwnKey = store_get($$store_subs ??= {}, "$settings", settings).useOwnKey;
    $$renderer2.push(`<div class="max-w-xl mx-auto space-y-6 fade-in pb-20"><h2 class="text-2xl font-bold text-slate-800">Configuración</h2> <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6"><h3 class="font-bold text-slate-800 mb-4 flex items-center gap-2">`);
    Zap($$renderer2, { class: "w-5 h-5 text-yellow-500" });
    $$renderer2.push(`<!----> Uso de IA</h3> `);
    if (store_get($$store_subs ??= {}, "$quota", quota).isUsingOwnKey) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex items-center gap-3"><div class="bg-yellow-100 p-2 rounded-full text-yellow-600">`);
      Crown($$renderer2, { class: "w-6 h-6" });
      $$renderer2.push(`<!----></div> <div><p class="font-bold text-yellow-800">Modo Pro Activo</p> <p class="text-xs text-yellow-700">Usando tu propia API Key. Sin límites.</p></div></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div><div class="flex justify-between text-sm mb-1"><span class="text-slate-500">Créditos Semanales</span> <span class="font-bold text-indigo-700">${escape_html(store_get($$store_subs ??= {}, "$quota", quota).remaining)} / ${escape_html(store_get($$store_subs ??= {}, "$quota", quota).limit)}</span></div> <div class="w-full bg-slate-100 rounded-full h-2.5 mb-2 overflow-hidden"><div class="bg-indigo-700 h-2.5 rounded-full transition-all duration-500"${attr_style(`width: ${stringify(store_get($$store_subs ??= {}, "$quota", quota).used / store_get($$store_subs ??= {}, "$quota", quota).limit * 100)}%`)}></div></div> <p class="text-xs text-slate-400">Se renueva el: ${escape_html(store_get($$store_subs ??= {}, "$quota", quota).resetDate ? new Date(store_get($$store_subs ??= {}, "$quota", quota).resetDate).toLocaleDateString() + " " + new Date(store_get($$store_subs ??= {}, "$quota", quota).resetDate).toLocaleTimeString() : "N/A")}</p></div>`);
    }
    $$renderer2.push(`<!--]--></div> <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-6"><h3 class="font-bold text-slate-800 mb-4 flex items-center gap-2">`);
    Key($$renderer2, { class: "w-5 h-5 text-indigo-700" });
    $$renderer2.push(`<!----> Gemini API Key</h3> <p class="text-sm text-slate-500 mb-6">Usa tu propia API Key de Google Gemini para eliminar los límites semanales.</p> <form class="space-y-4"><div class="flex items-center justify-between bg-slate-50 p-3 rounded-xl border border-slate-200"><span class="text-sm font-medium text-slate-700">Usar mi propia Key</span> <label class="relative inline-flex items-center cursor-pointer"><input type="checkbox"${attr("checked", useOwnKey, true)} class="sr-only peer"/> <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-700"></div></label></div> <div${attr_class(`${stringify(useOwnKey ? "" : "opacity-50")} transition-opacity`)}><div class="relative"><input type="password"${attr("value", apiKey)}${attr("placeholder", store_get($$store_subs ??= {}, "$settings", settings).hasKey ? "••••••••••••••••" : "Pega tu API Key aquí")} class="w-full p-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-700 text-sm transition-all pr-10"/> <div class="absolute right-3 top-3 text-slate-400">`);
    if (store_get($$store_subs ??= {}, "$settings", settings).hasKey) {
      $$renderer2.push("<!--[-->");
      Circle_check_big($$renderer2, { class: "w-5 h-5 text-emerald-500" });
    } else {
      $$renderer2.push("<!--[!-->");
      Lock($$renderer2, { class: "w-5 h-5" });
    }
    $$renderer2.push(`<!--]--></div></div> <p class="text-[10px] text-slate-400 mt-1 ml-1">La Key se cifra de forma segura. <a href="https://aistudio.google.com/app/apikey" target="_blank" class="text-indigo-700 hover:underline">Consigue una aquí</a></p></div> <button type="submit" class="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 shadow-lg transition-all mt-2">Guardar Cambios</button></form></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    if (store_get($$store_subs ??= {}, "$activeTab", activeTab) === "dashboard") {
      $$renderer2.push("<!--[-->");
      Dashboard($$renderer2);
    } else {
      $$renderer2.push("<!--[!-->");
      if (store_get($$store_subs ??= {}, "$activeTab", activeTab) === "transactions") {
        $$renderer2.push("<!--[-->");
        Transactions($$renderer2);
      } else {
        $$renderer2.push("<!--[!-->");
        if (store_get($$store_subs ??= {}, "$activeTab", activeTab) === "investments") {
          $$renderer2.push("<!--[-->");
          Investments($$renderer2);
        } else {
          $$renderer2.push("<!--[!-->");
          if (store_get($$store_subs ??= {}, "$activeTab", activeTab) === "accounts") {
            $$renderer2.push("<!--[-->");
            Accounts($$renderer2);
          } else {
            $$renderer2.push("<!--[!-->");
            if (store_get($$store_subs ??= {}, "$activeTab", activeTab) === "settings") {
              $$renderer2.push("<!--[-->");
              Settings($$renderer2);
            } else {
              $$renderer2.push("<!--[!-->");
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
