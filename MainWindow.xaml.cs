using Microsoft.Web.WebView2.Core;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using Path = System.IO.Path;

namespace wpf_poc
{

    
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window, INotifyPropertyChanged
    {

        private bool _showAppView;
        public bool ShowAppView
        {
            get { return _showAppView; }
            set
            {
                if (_showAppView != value)
                {
                    _showAppView = value;
                    OnPropertyChanged("ShowAppView");  // To notify when the property is changed
                }
            }
        }

        private bool _showWebView;
        public bool ShowWebView
        {
            get { return _showWebView; }
            set
            {
                if (_showWebView != value)
                {
                    _showWebView = value;
                    OnPropertyChanged("ShowWebView");  // To notify when the property is changed
                }
            }
        }

        public MainWindow()
        {
            InitializeComponent();

            ShowAppView = true;
            ShowWebView = false;
            DataContext = this;
        }

        async void InitializeAsync()
        {
      

            string contentFolder = @"C:\Users\Evan0\source\repos\wpf-poc\Content";

            await WebView.EnsureCoreWebView2Async();
            WebView.CoreWebView2.SetVirtualHostNameToFolderMapping("auto-renderer.app", contentFolder, CoreWebView2HostResourceAccessKind.Allow);
            WebView.CoreWebView2.Navigate("https://auto-renderer.app/index.html");
        }

        private void App_Clicked(object sender, RoutedEventArgs e)
        {
            ShowAppView = true;
            ShowWebView = false;
        }

        private void EmbeddedMFX_Clicked(object sender, RoutedEventArgs e)
        {
            ShowAppView = false;
            ShowWebView = true;
        }

        public event PropertyChangedEventHandler? PropertyChanged;

        protected virtual void OnPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}
