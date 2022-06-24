---
sidebar_position: 1
---

# Introduction: Why to Learn Stream Processing?

Stream processing is difficult.

Stream data are unbounded sequence. You may need to use **windows** to split unbounded data into bounded portions to make aggregations, sort, and join.
You may need to care about **out-of-order rows** and **late data**. A row timestamped as `12:09:59` may come to a window closing at `12:10:00`, for example.

But these difficulties do not come from stream processors. Although you write your applications dealing with consecutive data (like sensor data) without stream processors, you have to care about the things above by yourself to get meaningful outputs.

Learning fundamentals of stream processing will cultivate your mind to play with unbounded data.
And then, you would realize using stream processors would be a good choice for your application development.

This section includes not only general knowledge about stream processing, but also SpringQL's characteristics in implementation.
Even if you have rich experience in stream processing, you may still want to check the pages in this section.
