---
id: k044-onedrive-backup-to-external-disk-on-qnap
title: "K044 – OneDrive backup to external disk on QNAP"
slug: /KNIFES/K044-onedrive-backup-to-external-disk-on-qnap/
sidebar_label: "K044 – OneDrive backup to external disk on QNAP"
tags: []
---

This KNIFE explains how to create a full backup of your OneDrive data in cases where the local disk does not have sufficient capacity to mirror the entire cloud content. When 'Files On-Demand' is enabled, standard tools are unable to copy files – they can at best read their metadata. However, using tools like `rclone`, it becomes possible to back up the cloud directly without needing local mirroring.

