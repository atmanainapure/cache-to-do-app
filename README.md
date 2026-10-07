# Cache — a little focus, every day

A simple to-do app for your phone. Put everything in **Main Memory**, choose a few things for **Cache**, and keep your finished tasks in **Completed**.

**Your tasks are saved on your own device. No account, server database, or task upload.** Once the app says **Offline ready**, it can load and save tasks without an internet connection.

## Open and install Cache

**[Open Cache](https://atmanainapure.github.io/cache-to-do-app/)**

VERY IMPORTANT: This is a home-screen web app, not an APK or an App Store download.

### iPhone or iPad

1. Open the **Open Cache** link above in **Safari**, using a regular window rather than Private Browsing. If the link opened inside another app, open it in Safari.
2. Tap **Share**. Depending on your Safari layout, you may first need to open the page menu and choose Share.
3. Choose **Add to Home Screen**. If it is missing, scroll through the actions or use **Edit Actions** to add it.
4. Leave the name as **Cache**. Turn on **Open as Web App** if that option appears, then tap **Add**.
5. Open **Cache from its new home-screen icon while you are still online**.
6. Wait until **Offline ready** appears near the bottom of the app. You can also tap the phone icon to see this status.
7. Start entering your tasks in the home-screen app. To check offline use, turn on airplane mode, turn Wi-Fi off, close Cache, and open it again. Turn your connections back on after the check.

### Android

1. Open the **Open Cache** link above in **Chrome**, using a regular tab rather than Incognito. If needed, open the link outside a social or messaging app's built-in browser.
2. Tap the **three-dot menu** beside the address bar.
3. Choose **Install and create shortcut → Install**. Depending on your Chrome version, the option may instead be **Install app** or **Add to home screen**. Follow the confirmation shown on your phone.
4. Open **Cache from your home screen or app drawer while you are still online**.
5. Wait for **Offline ready** near the bottom of the app, then add your tasks.
6. To check offline use, turn on airplane mode, turn Wi-Fi off, close Cache, and reopen it. Turn your connections back on afterward.

**Install first, then add tasks.** A browser tab and a home-screen installation may use separate storage on some devices. If a list you entered in the browser does not appear in the installed app, export a backup from the browser and restore it in the installed app.

## Use the three spaces

Every space has **Academic**, **Career-oriented**, and **Personal** sections.

1. **Main Memory:** Tap the **+** button (or **Add to memory** on a larger screen). Choose a category and enter your tasks. Each line becomes a separate task; you can add up to 50 at once.
2. **Cache:** In Main Memory, press and hold a task briefly, then tap **Move to Cache**. You can also open its three-dot menu and choose the same action. Cache is the list you see when you open the app.
3. **Completed:** Tick a task in Cache. It moves into Completed automatically and keeps its category and completion date.
4. **Bring a task back:** Untick it in Completed to restore it to Cache, or use its menu to return it to Main Memory.
5. **Edit or delete:** Open the task's three-dot menu. A short-lived **Undo** button appears after deletion or movement.

Unfinished tasks stay in Cache overnight. The daily progress count uses your device's local date; it does not delete or reset your tasks.

## Where your data lives

- Tasks are stored in the browser's **IndexedDB storage on your device**. There is no external database, login, or automatic sync.
- Opening this same app on someone else's phone gives them their own list. They cannot see your tasks through the app.
- GitHub Pages serves the app's HTML, JavaScript, CSS, and icons. Task text is not sent to GitHub or any app server. The hosting provider can still receive ordinary website requests and access logs.
- The app has **no analytics, ads**, third-party fonts, or external scripts. Everything needed to run it is included here.
- The first load and app updates need internet access. Day-to-day task changes work offline after setup.
- The app asks the browser to retain local storage when supported, but browsers and operating systems can still remove data. Clearing site/app data, private browsing, device loss, and some uninstall or storage-cleanup actions can erase your list.
- A different browser, device, domain, or repository URL can have a separate list. Keep your published URL stable and export a backup before changing it.

## Back up or move your tasks

Tap the **Backups** button in the top bar (the archive-box icon).

### Export

1. Tap **Export backup**.
2. Tap **Save backup file** and save the file named `cache-backup-YYYY-MM-DD.json`. On iPhone, Safari may show a download or sharing sheet; choose **Save to Files** if needed.
3. Choose local device storage, such as **On My iPhone** or an Android device folder, if you want the backup to stay on your phone.
4. Keep periodic copies somewhere you control. A backup saved only on a lost phone cannot recover that phone's data.

### Restore

1. Open Backups on the destination device or installation.
2. Under **Restore a Cache backup**, choose your JSON file.
3. Check the task count, then tap **Restore missing tasks**.


