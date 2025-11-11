module.exports = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'intro',
        'getting-started/account-setup',
        'getting-started/dashboard',
        'getting-started/first-workflow',
      ],
    },
    {
      type: 'category',
      label: 'Nodes',
      items: [
        'nodes/overview',
        'nodes/triggers/trigger-nodes',
        'nodes/actions/action-nodes',
        'nodes/logic/logic-nodes'
      ],
    },
    'edges',
    {
      type: 'category',
      label: 'Settings',
      items: [
        'settings/overview',
        'settings/settings/planbilling',
        'settings/settings/members',
        'settings/settings/engine',
        {
          type: 'category',
          label: 'Logs',
          items: [
            'settings/settings/logs-overview',
            'settings/settings/logs/executed-runs',
            'settings/settings/logs/dead-letter-queue',
            'settings/settings/logs/blocked-egress',
            'settings/settings/logs/change-history',
          ],
        },
        'settings/settings/webhooks',
        'settings/settings/secrets-api-keys',
        'settings/settings/privacy',
        'settings/settings/integrations',
        'settings/settings/workflows',
        'settings/settings/danger-zone'
      ],
    },
    'profile/profile',
    {
      type: 'category',
      label: 'Workflow Templates',
      items: [
        'templates/templates'
      ],
    },
    {
      type: 'category',
      label: 'Workflow Authentication',
      items: ['auth/api', 'auth/oauth'],
    },
    {
      type: 'category',
      label: 'Legal',
      items: [
        'billing/limits',
        'legal/terms',
        'legal/privacy'
      ],
    },
  ],
};
