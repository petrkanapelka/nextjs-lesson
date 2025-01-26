import React from 'react';
import { LinkBlock } from './LinkBlock/LinkBlock';
import './Header.module.css';

export const Header = () => (
  <div className="navbar">
    <LinkBlock title="Characters" />
    <LinkBlock title="Locations" />
    <LinkBlock title="Episodes" />
    <LinkBlock title="Testing" />
    <LinkBlock title="Private" />
  </div>
);
