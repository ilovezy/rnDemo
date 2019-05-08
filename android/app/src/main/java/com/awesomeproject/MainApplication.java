package com.awesomeproject;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.airbnb.android.react.maps.MapsPackage;
import com.airbnb.android.react.lottie.LottiePackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;
import com.imagepicker.ImagePickerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import cn.jpush.reactnativejpush.JPushPackage;   // <--   导入 JPushPackage

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
  // 设置为 true 将不会弹出 toast
  private boolean SHUTDOWN_TOAST = false;
  // 设置为 true 将不会打印 log
  private boolean SHUTDOWN_LOG = false;

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new JPushPackage(SHUTDOWN_TOAST, SHUTDOWN_LOG),   //  <-- 添加 JPushPackage
          new MapsPackage(),
          new LottiePackage(),
          new RNCWebViewPackage(),
          new PickerPackage(),
          new SplashScreenReactPackage(),
          new ImagePickerPackage(),
          new VectorIconsPackage(),
          new RNGestureHandlerPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
