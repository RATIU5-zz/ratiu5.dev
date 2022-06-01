import { RemixBrowser } from "@remix-run/react";
import * as React from "react";
import { hydrateRoot } from "react-dom/client";

// https://github.com/remix-run/remix/issues/2570
hydrateRoot(document, <RemixBrowser />);
