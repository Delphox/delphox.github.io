## Creating a crash log

### Option 1: Without a PC (Android 11+)
**Prerequisites:**

Install Logcat Reader: https://play.google.com/store/apps/details?id=com.dp.logcatapp

Install LADB: https://github.com/sp1cyf0x/LADB/releases (app-release.apk)

**Steps:**
1. Pair LADB ([video guide](https://www.youtube.com/watch?v=4zKespn_OHg))
2. Paste and execute the following command into LADB shell:

```pm grant com.dp.logcatapp android.permission.READ_LOGS && am force-stop com.dp.logcatapp```

3. Open Logcat Reader and hit the ⚫ button.
4. Reproduce the crash.
5. Hit the ⬛ button and share the log to Discord/your app of choice.

The initial setup is only done once. From then on, you can just follow step 3-5 to log crashes. Another good thing to know is that Logcat Reader keeps a recent buffer of logs, so if a crash happens randomly, you can just hit triple dot and save, then share to Discord. Logs have no sensitive info.

᠎

### Option 2: With PC (Android 4.1+)
**Prerequisites:**

Install Logcat Reader: https://play.google.com/store/apps/details?id=com.dp.logcatapp

Follow any guide on how to setup adb between your PC and phone, example: https://www.youtube.com/watch?v=vr0GLIufzkM

**Steps:**
1. Pair your phone to your computer using the video above or any other guide, until your device appears when using the shell command: ```adb devices```
2. Paste and run the following command:

```adb shell "pm grant com.dp.logcatapp android.permission.READ_LOGS && am force-stop com.dp.logcatapp"```

3. Disconnect your phone from your computer.
4. Open Logcat Reader and hit the ⚫ button.
5. Reproduce the crash.
6. Hit the ⬛ button and share the log to Discord/your app of choice.

The initial setup is only done once. From then on, you can just follow step 4-6 to log crashes. Another good thing to know is that Logcat Reader keeps a recent buffer of logs, so if a crash happens randomly, you can just hit triple dot and save, then share to Discord. Logs have no sensitive info.
