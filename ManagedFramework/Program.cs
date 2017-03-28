using System;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace ManagedFramework
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.Title = "Managed Framework";

            var host = new WebHostBuilder()
                .UseKestrel()
                .UseUrls("http://localhost:5000")
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();

            //var host = new WebHostBuilder()
            //    .UseKestrel()
            //    .UseContentRoot(Directory.GetCurrentDirectory())
            //    .UseIISIntegration()
            //    .UseStartup<Startup>()
            //    .Build();

            //host.Run();
        }
    }
}
