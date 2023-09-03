import './bootstrap';
import './GSAP-Page';
import './script';

import.meta.glob([
    '../images/**',
    '../assets/fonts/**',
  ]);

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { TextPlugin } from "gsap/dist/TextPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin, TextPlugin);

import.meta.glob([
    '../images/**',
    '../fonts/**',
  ]);
