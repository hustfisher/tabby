"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3240],{75561:function(n,e,t){t.d(e,{B:function(){return r}});var s=t(18500);let i={"\n  query ListUserEvents(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n  ) {\n    userEvents(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n      start: $start\n      end: $end\n      users: $users\n    ) {\n      edges {\n        node {\n          id\n          userId\n          createdAt\n          kind\n          payload\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":s.UQ,"\n  mutation uploadUserAvatarBase64($id: ID!, $avatarBase64: String!) {\n    uploadUserAvatarBase64(id: $id, avatarBase64: $avatarBase64)\n  }\n":s.eI,"\n  mutation UpdateUserName($id: ID!, $name: String!) {\n    updateUserName(id: $id, name: $name)\n  }\n":s.DQ,"\n  mutation PasswordChange($input: PasswordChangeInput!) {\n    passwordChange(input: $input)\n  }\n":s.oZ,"\n  mutation updateEmailSetting($input: EmailSettingInput!) {\n    updateEmailSetting(input: $input)\n  }\n":s.gl,"\n  mutation deleteEmailSetting {\n    deleteEmailSetting\n  }\n":s.wZ,"\n  mutation SendTestEmail($to: String!) {\n    sendTestEmail(to: $to)\n  }\n":s.nI,"\n  query emailSetting {\n    emailSetting {\n      smtpUsername\n      smtpServer\n      fromAddress\n      encryption\n      authMethod\n      smtpPort\n    }\n  }\n":s.k6,"\n  mutation UpdateIntegration($input: UpdateIntegrationInput!) {\n    updateIntegration(input: $input)\n  }\n":s.fc,"\n  mutation DeleteIntegration($id: ID!, $kind: IntegrationKind!) {\n    deleteIntegration(id: $id, kind: $kind)\n  }\n":s.AU,"\n  mutation UpdateIntegratedRepositoryActive($id: ID!, $active: Boolean!) {\n    updateIntegratedRepositoryActive(id: $id, active: $active)\n  }\n":s.o7,"\n  mutation CreateIntegration($input: CreateIntegrationInput!) {\n    createIntegration(input: $input)\n  }\n":s.fY,"\n  mutation grantSourceIdReadAccess($sourceId: String!, $userGroupId: ID!) {\n    grantSourceIdReadAccess(sourceId: $sourceId, userGroupId: $userGroupId)\n  }\n":s.Yr,"\n  mutation revokeSourceIdReadAccess($sourceId: String!, $userGroupId: ID!) {\n    revokeSourceIdReadAccess(sourceId: $sourceId, userGroupId: $userGroupId)\n  }\n":s.z,"\n  mutation CreateCustomDocument($input: CreateCustomDocumentInput!) {\n    createCustomDocument(input: $input)\n  }\n":s.Gf,"\n  query CustomWebDocuments(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    customWebDocuments(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          url\n          name\n          id\n          sourceId\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":s.wx,"\n  mutation DeleteCustomDocument($id: ID!) {\n    deleteCustomDocument(id: $id)\n  }\n":s.c3,"\n  query PresetWebDocuments(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n    $isActive: Boolean\n  ) {\n    presetWebDocuments(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n      isActive: $isActive\n    ) {\n      edges {\n        node {\n          id\n          name\n          isActive\n          sourceId\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":s.z1,"\n  mutation SetPresetDocumentActive($input: SetPresetDocumentActiveInput!) {\n    setPresetDocumentActive(input: $input)\n  }\n":s.h_,"\n  mutation deleteGitRepository($id: ID!) {\n    deleteGitRepository(id: $id)\n  }\n":s.TS,"\n  mutation createGitRepository($name: String!, $gitUrl: String!) {\n    createGitRepository(name: $name, gitUrl: $gitUrl)\n  }\n":s.ad,"\n  mutation triggerJobRun($command: String!) {\n    triggerJobRun(command: $command)\n  }\n":s.uk,"\n  mutation testLdapConnection($input: UpdateLdapCredentialInput!) {\n    testLdapConnection(input: $input)\n  }\n":s.rL,"\n  mutation updateLdapCredential($input: UpdateLdapCredentialInput!) {\n    updateLdapCredential(input: $input)\n  }\n":s.xn,"\n  mutation deleteLdapCredential {\n    deleteLdapCredential\n  }\n":s.X6,"\n  mutation updateOauthCredential($input: UpdateOAuthCredentialInput!) {\n    updateOauthCredential(input: $input)\n  }\n":s.m,"\n  mutation deleteOauthCredential($provider: OAuthProvider!) {\n    deleteOauthCredential(provider: $provider)\n  }\n":s.ZH,"\n  query OAuthCallbackUrl($provider: OAuthProvider!) {\n    oauthCallbackUrl(provider: $provider)\n  }\n":s.L$,"\n  mutation updateNetworkSettingMutation($input: NetworkSettingInput!) {\n    updateNetworkSetting(input: $input)\n  }\n":s.rN,"\n  mutation updateSecuritySetting($input: SecuritySettingInput!) {\n    updateSecuritySetting(input: $input)\n  }\n":s.Nl,"\n  query SecuritySetting {\n    securitySetting {\n      allowedRegisterDomainList\n      disableClientSideTelemetry\n    }\n  }\n":s.rU,"\n  mutation UploadLicense($license: String!) {\n    uploadLicense(license: $license)\n  }\n":s.Yo,"\n  mutation ResetLicense {\n    resetLicense\n  }\n":s.d0,"\n  mutation CreateInvitation($email: String!) {\n    createInvitation(email: $email)\n  }\n":s.ib,"\n  mutation DeleteInvitation($id: ID!) {\n    deleteInvitation(id: $id)\n  }\n":s.YM,"\n  mutation updateUserRole($id: ID!, $isAdmin: Boolean!) {\n    updateUserRole(id: $id, isAdmin: $isAdmin)\n  }\n":s.XF,"\n  mutation UpdateUserActive($id: ID!, $active: Boolean!) {\n    updateUserActive(id: $id, active: $active)\n  }\n":s.dv,"\n  mutation generateResetPasswordUrl($userId: ID!) {\n    generateResetPasswordUrl(userId: $userId)\n  }\n":s.nh,"\n  mutation createUserGroup($input: CreateUserGroupInput!) {\n    createUserGroup(input: $input)\n  }\n":s.e8,"\n  mutation DeleteUserGroupMembership($userGroupId: ID!, $userId: ID!) {\n    deleteUserGroupMembership(userGroupId: $userGroupId, userId: $userId)\n  }\n":s.zD,"\n  mutation UpsertUserGroupMembership($input: UpsertUserGroupMembershipInput!) {\n    upsertUserGroupMembership(input: $input)\n  }\n":s.uI,"\n  mutation DeleteUserGroup($id: ID!) {\n    deleteUserGroup(id: $id)\n  }\n":s.hQ,"\n  query GetRegistrationToken {\n    registrationToken\n  }\n":s.bh,"\n  mutation ResetRegistrationToken {\n    resetRegistrationToken\n  }\n":s.wW,"\n  query TestModelConnection($backend: ModelHealthBackend!) {\n    testModelConnection(backend: $backend) {\n      latencyMs\n    }\n  }\n":s.rE,"\n  query GetDiskUsageStats {\n    diskUsageStats {\n      events {\n        filepath\n        sizeKb\n      }\n      indexedRepositories {\n        filepath\n        sizeKb\n      }\n      database {\n        filepath\n        sizeKb\n      }\n      models {\n        filepath\n        sizeKb\n      }\n    }\n  }\n":s.xX,"\n  query readRepositoryRelatedQuestions($sourceId: String!) {\n    readRepositoryRelatedQuestions(sourceId: $sourceId)\n  }\n":s.pu,"\n  query ListThreads(\n    $ids: [ID!]\n    $isEphemeral: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    threads(\n      ids: $ids\n      isEphemeral: $isEphemeral\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          userId\n          createdAt\n          updatedAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":s.qk,"\n  mutation passwordReset($input: PasswordResetInput!) {\n    passwordReset(input: $input)\n  }\n":s.vK,"\n  mutation tokenAuthLdap($userId: String!, $password: String!) {\n    tokenAuthLdap(userId: $userId, password: $password) {\n      accessToken\n      refreshToken\n    }\n  }\n":s.Wv,"\n  mutation requestPasswordResetEmail($input: RequestPasswordResetEmailInput!) {\n    requestPasswordResetEmail(input: $input)\n  }\n":s.i8,"\n  mutation requestInvitationEmail($input: RequestInvitationInput!) {\n    requestInvitationEmail(input: $input) {\n      email\n      code\n    }\n  }\n":s.S_,"\n  query authProviders {\n    authProviders {\n      kind\n    }\n  }\n":s.c1,"\n  mutation tokenAuth($email: String!, $password: String!) {\n    tokenAuth(email: $email, password: $password) {\n      accessToken\n      refreshToken\n    }\n  }\n":s.UO,"\n  mutation register(\n    $name: String!\n    $email: String!\n    $password1: String!\n    $password2: String!\n    $invitationCode: String\n  ) {\n    register(\n      name: $name\n      email: $email\n      password1: $password1\n      password2: $password2\n      invitationCode: $invitationCode\n    ) {\n      accessToken\n      refreshToken\n    }\n  }\n":s.YR,"\n  query RepositoryGrep(\n    $id: ID!\n    $kind: RepositoryKind!\n    $rev: String\n    $query: String!\n  ) {\n    repositoryGrep(kind: $kind, id: $id, rev: $rev, query: $query) {\n      files {\n        path\n        lines {\n          line {\n            text\n            base64\n          }\n          byteOffset\n          lineNumber\n          subMatches {\n            bytesStart\n            bytesEnd\n          }\n        }\n      }\n      elapsedMs\n    }\n  }\n":s.lq,"\n  mutation DeletePage($id: ID!) {\n    deletePage(id: $id)\n  }\n":s.$Q,"\n  subscription createThreadToPageRun($threadId: ID!) {\n    createThreadToPageRun(threadId: $threadId) {\n      __typename\n      ... on PageCreated {\n        id\n        authorId\n        title\n      }\n      ... on PageContentDelta {\n        delta\n      }\n      ... on PageContentCompleted {\n        id\n      }\n      ... on PageSectionsCreated {\n        sections {\n          id\n          title\n          position\n        }\n      }\n      ... on PageSectionContentDelta {\n        id\n        delta\n      }\n      ... on PageSectionContentCompleted {\n        id\n      }\n      ... on PageCompleted {\n        id\n      }\n    }\n  }\n":s.dQ,"\n  mutation DeletePageSection($sectionId: ID!) {\n    deletePageSection(sectionId: $sectionId)\n  }\n":s.$g,"\n  mutation movePageSection($id: ID!, $direction: MoveSectionDirection!) {\n    movePageSection(id: $id, direction: $direction)\n  }\n":s.nA,"\n  mutation DeleteThread($id: ID!) {\n    deleteThread(id: $id)\n  }\n":s.xW,"\n  mutation UpdateThreadMessage($input: UpdateMessageInput!) {\n    updateThreadMessage(input: $input)\n  }\n":s.Tj,"\n  mutation markNotificationsRead($notificationId: ID) {\n    markNotificationsRead(notificationId: $notificationId)\n  }\n":s.yR,"\n  mutation ResetUserAuthToken {\n    resetUserAuthToken\n  }\n":s.qq,"\n  query GetLicenseInfo {\n    license {\n      type\n      status\n      seats\n      seatsUsed\n      issuedAt\n      expiresAt\n    }\n  }\n":s.eZ,"\n  query MeQuery {\n    me {\n      id\n      email\n      name\n      isAdmin\n      isOwner\n      authToken\n      isPasswordSet\n      isSsoUser\n    }\n  }\n":s.fk,"\n  query NetworkSetting {\n    networkSetting {\n      externalUrl\n    }\n  }\n":s.m2,"\n  query GetServerInfo {\n    serverInfo {\n      isAdminInitialized\n      isEmailConfigured\n      isChatEnabled\n      allowSelfSignup\n      isDemoMode\n    }\n  }\n":s.a,"\n  subscription CreateThreadAndRun($input: CreateThreadAndRunInput!) {\n    createThreadAndRun(input: $input) {\n      __typename\n      ... on ThreadCreated {\n        id\n      }\n      ... on ThreadUserMessageCreated {\n        id\n      }\n      ... on ThreadAssistantMessageCreated {\n        id\n      }\n      ... on ThreadAssistantMessageReadingCode {\n        snippet\n        fileList\n      }\n      ... on ThreadRelevantQuestions {\n        questions\n      }\n      ... on ThreadAssistantMessageAttachmentsCodeFileList {\n        codeFileList: fileList\n      }\n      ... on ThreadAssistantMessageAttachmentsCode {\n        hits {\n          code {\n            gitUrl\n            commit\n            filepath\n            language\n            content\n            startLine\n          }\n          scores {\n            rrf\n            bm25\n            embedding\n          }\n        }\n      }\n      ... on ThreadAssistantMessageAttachmentsDoc {\n        hits {\n          doc {\n            __typename\n            ... on MessageAttachmentWebDoc {\n              title\n              link\n              content\n            }\n            ... on MessageAttachmentIssueDoc {\n              title\n              link\n              author {\n                id\n                email\n                name\n              }\n              body\n              closed\n            }\n            ... on MessageAttachmentPullDoc {\n              title\n              link\n              author {\n                id\n                email\n                name\n              }\n              body\n              merged\n            }\n          }\n          score\n        }\n      }\n      ... on ThreadAssistantMessageContentDelta {\n        delta\n      }\n      ... on ThreadAssistantMessageCompleted {\n        id\n      }\n    }\n  }\n":s.VL,"\n  subscription CreateThreadRun($input: CreateThreadRunInput!) {\n    createThreadRun(input: $input) {\n      __typename\n      ... on ThreadCreated {\n        id\n      }\n      ... on ThreadUserMessageCreated {\n        id\n      }\n      ... on ThreadAssistantMessageCreated {\n        id\n      }\n      ... on ThreadAssistantMessageReadingCode {\n        snippet\n        fileList\n      }\n      ... on ThreadRelevantQuestions {\n        questions\n      }\n      ... on ThreadAssistantMessageAttachmentsCodeFileList {\n        codeFileList: fileList\n      }\n      ... on ThreadAssistantMessageAttachmentsCode {\n        hits {\n          code {\n            gitUrl\n            commit\n            filepath\n            language\n            content\n            startLine\n          }\n          scores {\n            rrf\n            bm25\n            embedding\n          }\n        }\n      }\n      ... on ThreadAssistantMessageAttachmentsDoc {\n        hits {\n          doc {\n            __typename\n            ... on MessageAttachmentWebDoc {\n              title\n              link\n              content\n            }\n            ... on MessageAttachmentIssueDoc {\n              title\n              link\n              author {\n                id\n                email\n                name\n              }\n              body\n              closed\n            }\n            ... on MessageAttachmentPullDoc {\n              title\n              link\n              author {\n                id\n                email\n                name\n              }\n              body\n              merged\n            }\n          }\n          score\n        }\n      }\n      ... on ThreadAssistantMessageContentDelta {\n        delta\n      }\n      ... on ThreadAssistantMessageCompleted {\n        id\n      }\n    }\n  }\n":s.uM,"\n  mutation DeleteThreadMessagePair(\n    $threadId: ID!\n    $userMessageId: ID!\n    $assistantMessageId: ID!\n  ) {\n    deleteThreadMessagePair(\n      threadId: $threadId\n      userMessageId: $userMessageId\n      assistantMessageId: $assistantMessageId\n    )\n  }\n":s.ou,"\n  mutation refreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n    }\n  }\n":s.FR,"\n  mutation LogoutAllSessions {\n    logoutAllSessions\n  }\n":s.Il,"\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":s.Xx,"\n  query gitRepositories(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitRepositories(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n          sourceId\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":s.Mi,"\n  query ListJobRuns(\n    $ids: [ID!]\n    $jobs: [String!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    jobRuns(\n      ids: $ids\n      jobs: $jobs\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          job\n          createdAt\n          startedAt\n          finishedAt\n          exitCode\n          stdout\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":s.$S,"\n  query GetJobRunStats($jobs: [String!]) {\n    jobRunStats(jobs: $jobs) {\n      success\n      failed\n      pending\n    }\n  }\n":s.np,"\n  query ListJobs {\n    jobs\n  }\n":s.Ax,"\n  query ListUsers(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    users(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          email\n          isAdmin\n          isOwner\n          createdAt\n          active\n          name\n          isSsoUser\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":s.by,"\n  query DailyStatsInPastYear($users: [ID!]) {\n    dailyStatsInPastYear(users: $users) {\n      start\n      end\n      completions\n      selects\n      views\n    }\n  }\n":s.Wd,"\n  query DailyStats(\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n    $languages: [Language!]\n  ) {\n    dailyStats(start: $start, end: $end, users: $users, languages: $languages) {\n      start\n      end\n      completions\n      selects\n      views\n      language\n    }\n  }\n":s.Sm,"\n  query ListIntegrations(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integrations(\n      ids: $ids\n      kind: $kind\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n          apiBase\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":s.KZ,"\n  query ListIntegratedRepositories(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integratedRepositories(\n      ids: $ids\n      kind: $kind\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          gitUrl\n          active\n          sourceId\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              startedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":s.qt,"\n  query RepositoryList {\n    repositoryList {\n      id\n      name\n      kind\n      gitUrl\n      refs {\n        name\n        commit\n      }\n    }\n  }\n":s.HC,"\n  query RepositorySearch(\n    $kind: RepositoryKind!\n    $id: ID!\n    $rev: String\n    $pattern: String!\n  ) {\n    repositorySearch(kind: $kind, id: $id, rev: $rev, pattern: $pattern) {\n      type\n      path\n      indices\n    }\n  }\n":s.BH,"\n  query ContextInfo {\n    contextInfo {\n      sources {\n        id\n        sourceKind\n        sourceId\n        sourceName\n      }\n    }\n  }\n":s.w4,"\n  query UserGroups {\n    userGroups {\n      id\n      name\n      createdAt\n      updatedAt\n      members {\n        user {\n          id\n          email\n          name\n          createdAt\n        }\n        isGroupAdmin\n        createdAt\n        updatedAt\n      }\n    }\n  }\n":s.hx,"\n  query sourceIdAccessPolicies($sourceId: String!) {\n    sourceIdAccessPolicies(sourceId: $sourceId) {\n      sourceId\n      read {\n        id\n        name\n      }\n    }\n  }\n":s.NL,"\n  query ListThreadMessages(\n    $threadId: ID!\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    threadMessages(\n      threadId: $threadId\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          threadId\n          codeSourceId\n          role\n          content\n          attachment {\n            code {\n              gitUrl\n              commit\n              filepath\n              language\n              content\n              startLine\n            }\n            clientCode {\n              filepath\n              content\n              startLine\n            }\n            doc {\n              __typename\n              ... on MessageAttachmentWebDoc {\n                title\n                link\n                content\n              }\n              ... on MessageAttachmentIssueDoc {\n                title\n                link\n                author {\n                  id\n                  email\n                  name\n                }\n                body\n                closed\n              }\n              ... on MessageAttachmentPullDoc {\n                title\n                link\n                author {\n                  id\n                  email\n                  name\n                }\n                body\n                merged\n              }\n            }\n            codeFileList {\n              fileList\n            }\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":s.f7,"\n  mutation SetThreadPersisted($threadId: ID!) {\n    setThreadPersisted(threadId: $threadId)\n  }\n":s.qu,"\n  query Notifications {\n    notifications {\n      id\n      content\n      read\n      createdAt\n    }\n  }\n":s.Qw,"\n  query LdapCredential {\n    ldapCredential {\n      host\n      port\n      bindDn\n      baseDn\n      userFilter\n      encryption\n      skipTlsVerify\n      emailAttribute\n      nameAttribute\n      createdAt\n      updatedAt\n    }\n  }\n":s.Ee,"\n  query OAuthCredential($provider: OAuthProvider!) {\n    oauthCredential(provider: $provider) {\n      provider\n      clientId\n      createdAt\n      updatedAt\n    }\n  }\n":s.Fd,"\n  query RepositorySourceList {\n    repositoryList {\n      id\n      name\n      kind\n      gitUrl\n      sourceId\n      sourceName\n      sourceKind\n    }\n  }\n":s.mO,"\n  query ListPages(\n    $ids: [ID!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    pages(\n      ids: $ids\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          authorId\n          title\n          content\n          createdAt\n          updatedAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":s.fv,"\n  query ListPageSections(\n    $pageId: ID!\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    pageSections(\n      pageId: $pageId\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          pageId\n          title\n          content\n          position\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n":s.$N};function r(n){var e;return null!==(e=i[n])&&void 0!==e?e:{}}},43240:function(n,e,t){t.d(e,{BX:function(){return s.B}});var s=t(75561)}}]);