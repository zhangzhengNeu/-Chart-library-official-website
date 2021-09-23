/* eslint-disable */

module.exports = {
  apps: [
    {
      name: 'rocket-chart-gallery',
      script: './server/server.js',
      instances: 1,
      env: {
        NODE_ENV: 'test',
        NODE_PORT: 8080,
      },
      watch: false,
      merge_logs: true,
      exec_mode: 'cluster',
      max_memory_restart: '600M',
      instance_var: 'NODE_APP_INSTANCE',
    },
  ],
};
