"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\ud83c\udfe0 Home","href":"/","docId":"home"},{"type":"category","label":"\ud83c\udfc3 Get Started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Install and Run an App","href":"/get-started/install-and-run-app","docId":"get-started/install-and-run-app"},{"type":"link","label":"Write Basic Apps","href":"/get-started/write-basic-apps","docId":"get-started/write-basic-apps"}]},{"type":"category","label":"\u270d\ufe0f Learn SpringQL","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Event Time and Watermark","href":"/learn-springql/event-time-and-watermark","docId":"learn-springql/event-time-and-watermark"},{"type":"link","label":"Window","href":"/learn-springql/window","docId":"learn-springql/window"},{"type":"link","label":"SpringQL\'s Execution Model","href":"/learn-springql/execution-model","docId":"learn-springql/execution-model"},{"type":"category","label":"Pipeline","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Source reader","href":"/learn-springql/pipeline/source-reader","docId":"learn-springql/pipeline/source-reader"},{"type":"link","label":"Sink writer","href":"/learn-springql/pipeline/sink-writer","docId":"learn-springql/pipeline/sink-writer"},{"type":"link","label":"Stream","href":"/learn-springql/pipeline/stream","docId":"learn-springql/pipeline/stream"},{"type":"link","label":"Pump","href":"/learn-springql/pipeline/pump","docId":"learn-springql/pipeline/pump"},{"type":"link","label":"Data type","href":"/learn-springql/pipeline/data-type","docId":"learn-springql/pipeline/data-type"}],"href":"/learn-springql/pipeline/"}],"href":"/learn-springql/"},{"type":"category","label":"\ud83d\udcbb Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Client API","href":"/reference/client-api","docId":"reference/client-api"},{"type":"category","label":"SQL","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Syntax","href":"/reference/sql/syntax","docId":"reference/sql/syntax"},{"type":"category","label":"Query (SELECT statement)","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"select-list","href":"/reference/sql/query/select-list","docId":"reference/sql/query/select-list"},{"type":"link","label":"Window aggregation","href":"/reference/sql/query/window-aggregation","docId":"reference/sql/query/window-aggregation"},{"type":"link","label":"Window join","href":"/reference/sql/query/window-join","docId":"reference/sql/query/window-join"}]},{"type":"category","label":"CREATE statements","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"CREATE SOURCE READER","href":"/reference/sql/create/create-source-reader","docId":"reference/sql/create/create-source-reader"},{"type":"link","label":"CREATE SINK WRITER","href":"/reference/sql/create/create-sink-writer","docId":"reference/sql/create/create-sink-writer"},{"type":"link","label":"CREATE STREAM","href":"/reference/sql/create/create-stream","docId":"reference/sql/create/create-stream"},{"type":"link","label":"CREATE PUMP","href":"/reference/sql/create/create-pump","docId":"reference/sql/create/create-pump"}]}],"href":"/reference/sql/"}],"href":"/reference/"},{"type":"category","label":"\ud83d\udeb0 Deployment","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Configuration","href":"/deployment/configuration","docId":"deployment/configuration"}],"href":"/deployment/"},{"type":"category","label":"\ud83c\udf0e Real-World Example","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"CAN bus data","href":"/real-world-example/can","docId":"real-world-example/can"}],"href":"/real-world-example/"}]},"docs":{"deployment/configuration":{"id":"deployment/configuration","title":"Configuration","description":"You can configure SpringQL in TOML format.","sidebar":"tutorialSidebar"},"deployment/index":{"id":"deployment/index","title":"Introduction","description":"","sidebar":"tutorialSidebar"},"get-started/install-and-run-app":{"id":"get-started/install-and-run-app","title":"Install and Run an App","description":"In this page, you will learn how to install SpringQL in your environment and how to run a demo application written in your favorite language.","sidebar":"tutorialSidebar"},"get-started/write-basic-apps":{"id":"get-started/write-basic-apps","title":"Write Basic Apps","description":"You might already succeeded in running a demo app.","sidebar":"tutorialSidebar"},"home":{"id":"home","title":"\ud83c\udfe0 Home","description":"SpringQL is a light-weight stream processor running in a single machine.","sidebar":"tutorialSidebar"},"learn-springql/event-time-and-watermark":{"id":"learn-springql/event-time-and-watermark","title":"Event Time and Watermark","description":"Event time is a timestamp attached to a row. The timestamp can be anything but it is usually the time the row is generated.","sidebar":"tutorialSidebar"},"learn-springql/execution-model":{"id":"learn-springql/execution-model","title":"SpringQL\'s Execution Model","description":"In this page, you\'ll learn how a pipeline you defined is executed in SpringQL.","sidebar":"tutorialSidebar"},"learn-springql/index":{"id":"learn-springql/index","title":"Introduction: Why to Learn Stream Processing?","description":"Stream processing is difficult.","sidebar":"tutorialSidebar"},"learn-springql/pipeline/data-type":{"id":"learn-springql/pipeline/data-type","title":"Data type","description":"","sidebar":"tutorialSidebar"},"learn-springql/pipeline/index":{"id":"learn-springql/pipeline/index","title":"Pipeline","description":"","sidebar":"tutorialSidebar"},"learn-springql/pipeline/pump":{"id":"learn-springql/pipeline/pump","title":"Pump","description":"","sidebar":"tutorialSidebar"},"learn-springql/pipeline/sink-writer":{"id":"learn-springql/pipeline/sink-writer","title":"Sink writer","description":"","sidebar":"tutorialSidebar"},"learn-springql/pipeline/source-reader":{"id":"learn-springql/pipeline/source-reader","title":"Source reader","description":"","sidebar":"tutorialSidebar"},"learn-springql/pipeline/stream":{"id":"learn-springql/pipeline/stream","title":"Stream","description":"","sidebar":"tutorialSidebar"},"learn-springql/window":{"id":"learn-springql/window","title":"Window","description":"Window is one of the most important tools in stream processing. It splits unbounded stream data into bounded ports.","sidebar":"tutorialSidebar"},"real-world-example/can":{"id":"real-world-example/can","title":"CAN bus data","description":"","sidebar":"tutorialSidebar"},"real-world-example/index":{"id":"real-world-example/index","title":"Introduction","description":"","sidebar":"tutorialSidebar"},"reference/client-api":{"id":"reference/client-api","title":"Client API","description":"C","sidebar":"tutorialSidebar"},"reference/index":{"id":"reference/index","title":"Introduction","description":"","sidebar":"tutorialSidebar"},"reference/sql/create/create-pump":{"id":"reference/sql/create/create-pump","title":"CREATE PUMP","description":"","sidebar":"tutorialSidebar"},"reference/sql/create/create-sink-writer":{"id":"reference/sql/create/create-sink-writer","title":"CREATE SINK WRITER","description":"","sidebar":"tutorialSidebar"},"reference/sql/create/create-source-reader":{"id":"reference/sql/create/create-source-reader","title":"CREATE SOURCE READER","description":"","sidebar":"tutorialSidebar"},"reference/sql/create/create-stream":{"id":"reference/sql/create/create-stream","title":"CREATE STREAM","description":"","sidebar":"tutorialSidebar"},"reference/sql/index":{"id":"reference/sql/index","title":"SQL","description":"This section describes the SQL language supported in SpringQL, including Data Definition Language (DDL), Data Manipulation Language (DML) and Query Language.","sidebar":"tutorialSidebar"},"reference/sql/query/select-list":{"id":"reference/sql/query/select-list","title":"select-list","description":"","sidebar":"tutorialSidebar"},"reference/sql/query/window-aggregation":{"id":"reference/sql/query/window-aggregation","title":"Window aggregation","description":"","sidebar":"tutorialSidebar"},"reference/sql/query/window-join":{"id":"reference/sql/query/window-join","title":"Window join","description":"","sidebar":"tutorialSidebar"},"reference/sql/syntax":{"id":"reference/sql/syntax","title":"Syntax","description":"SQL supported in SpringQL is syntactically defined in PEG (parsing expression grammars).","sidebar":"tutorialSidebar"}}}')}}]);