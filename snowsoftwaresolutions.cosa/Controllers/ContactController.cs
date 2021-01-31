using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using snowsoftwaresolutions.cosa.Models;

namespace snowsoftwaresolutions.cosa.Controllers
{
    public class ContactController : Controller
    {
        private readonly ILogger<ContactController> _logger;

        public ContactController(ILogger<ContactController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        /*
        [HttpPost]
        public async Task<IActionResult> AddPerson([FromBody] UserViewModel request)
        {
            try
            {
                var requestUser = request.ToContractRequest(_mapper);
                var userAdd = await _userService.Add(requestUser);
                return Json(userAdd.Data.User);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Getting Reservation");
                return Json(null);
            }
        }*/
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
