using System.Threading.Tasks;

namespace ManagedFramework.Core.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
