/*
 * Copyright © 2022 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

import path from 'node:path';
import PathCache from "../helpers/pathCache.js";
import { isExist } from '../helpers/pathHelpers.js';

/**
 * @param {string} input myInput
*/
export const cd = async (input) => {
    let absolutePath = path.resolve(PathCache.getPath(), input);
    if(path.basename(absolutePath).includes('.')) {
        absolutePath = path.dirname(absolutePath);
    }
    const isPathExist = await isExist(absolutePath);
    if(isPathExist) {
        PathCache.setPath(absolutePath);
    }
};