using System.Threading.Tasks;

namespace ManagedFramework.Core.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
