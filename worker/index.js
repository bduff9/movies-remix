import { createEventHandler } from "@remix-run/cloudflare-workers";

import * as build from "../build/index";

addEventListener("fetch", createEventHandler({ build }));
