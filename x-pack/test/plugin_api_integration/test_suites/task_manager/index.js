/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

export default function ({ loadTestFile }) {
  describe('task_manager', () => {
    this.tags('ciGroup4');
    loadTestFile(require.resolve('./task_manager_integration'));
  });
}