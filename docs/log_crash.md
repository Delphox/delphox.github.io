## Creating a crash log

### Option 1: Without a PC (Android 11+)
**Prerequisites:**

Install Logcat Reader: [https://play.google.com/store/apps/details?id=com.dp.logcatapp](https://play.google.com/store/apps/details?id=com.dp.logcatapp)

Install LADB: [https://github.com/sp1cyf0x/LADB/releases](https://github.com/sp1cyf0x/LADB/releases) (app-release.apk)

**Make sure you are connected to a Wi-Fi network**. If you don't have home Wi-Fi then make a temporary hotspot with another device (the Wi-Fi doesn't need to have internet).

**Steps:**
1. Pair LADB ([video guide](https://www.youtube.com/watch?v=4zKespn_OHg)). NOTE: on Xiaomi/MIUI devices, also toggle "USB Debugging (Security Settings)" in Developer Tools.
2. Paste and execute the following command into LADB shell: ```pm grant com.dp.logcatapp android.permission.READ_LOGS && am force-stop com.dp.logcatapp```
3. Open Logcat Reader and hit the ⚫ button.
4. Reproduce the crash.
5. Hit the ⬛ button and share the log to Discord/your app of choice.

The initial setup is only done once. After the command is executed successfully, Logcat Reader will have the reading logs permission permanently (as long as you don't uninstall it), and you can just follow step 3-5 to log crashes. You can even uninstall LADB or disable wireless debugging if you want. Another good thing to know is that Logcat Reader keeps a recent buffer of logs, so if a crash happens randomly, you can just hit triple dot and save, then share to Discord. Logs have no sensitive info.

᠎

### Option 2: With PC (Android 4.1+)
**Prerequisites:**

Install Logcat Reader: [https://play.google.com/store/apps/details?id=com.dp.logcatapp](https://play.google.com/store/apps/details?id=com.dp.logcatapp)

Follow any guide on how to setup adb between your PC and phone, example: [https://www.youtube.com/watch?v=vr0GLIufzkM](https://www.youtube.com/watch?v=vr0GLIufzkM). NOTE: on Xiaomi/MIUI devices, also toggle "USB Debugging (Security Settings)" in Developer Tools.

**Steps:**
1. Pair your phone to your computer using the video above or any other guide, until your device appears when using the shell command: ```adb devices```
2. Paste and run the following command: ```adb shell "pm grant com.dp.logcatapp android.permission.READ_LOGS && am force-stop com.dp.logcatapp"```
3. Disconnect your phone from your computer.
4. Open Logcat Reader and hit the ⚫ button.
5. Reproduce the crash.
6. Hit the ⬛ button and share the log to Discord/your app of choice.

The initial setup is only done once. After the command is executed successfully, Logcat Reader will have the reading logs permission permanently (as long as you don't uninstall it), and you can just follow step 4-6 to log crashes. Another good thing to know is that Logcat Reader keeps a recent buffer of logs, so if a crash happens randomly, you can just hit triple dot and save, then share to Discord. Logs have no sensitive info.
