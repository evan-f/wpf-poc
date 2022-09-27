using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Diagnostics;
using System.Text;

namespace Views
{
    public partial class MFXEmbedded : Component
    {
        public MFXEmbedded()
        {
            InitializeComponent();
        }

        public MFXEmbedded(IContainer container)
        {
            container.Add(this);

            InitializeComponent();
        }
    }
}
