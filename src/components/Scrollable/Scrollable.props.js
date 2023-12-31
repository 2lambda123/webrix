/**
 * Copyright (c) 2020, Amdocs Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import {func, shape, node, bool} from 'prop-types';
import {noop} from 'utility/memory';

export const propTypes = {
    style: shape({}),
    onScroll: func,
    onUpdate: func,
    scrollOnDOMChange: bool,
    children: node,
    element: node,
    cssVarsOnTracks: bool, // temporary workaround for Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=1266517
};

export const defaultProps = {
    style: null,
    onScroll: noop,
    onUpdate: noop,
    scrollOnDOMChange: true,
    children: null,
    element: <div/>,
    cssVarsOnTracks: false,
};
