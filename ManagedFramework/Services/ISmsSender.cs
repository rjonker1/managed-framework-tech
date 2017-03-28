using System.Threading.Tasks;

namespace ManagedFramework.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
