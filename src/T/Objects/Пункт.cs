﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.T
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Пункт.
    /// </summary>
    // *** Start programmer edit section *** (Пункт CustomAttributes)

    // *** End programmer edit section *** (Пункт CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПунктE", new string[] {
            "Сделано as \'Сделано\'",
            "Работа as \'Работа\'",
            "Работа.План as \'План\'"}, Hidden=new string[] {
            "Работа.План"})]
    [MasterViewDefineAttribute("ПунктE", "Работа", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "План")]
    public class Пункт : ICSSoft.STORMNET.DataObject
    {
        
        private bool fСделано;
        
        private IIS.T.Работа fРабота;
        
        private IIS.T.Задание fЗадание;
        
        // *** Start programmer edit section *** (Пункт CustomMembers)

        // *** End programmer edit section *** (Пункт CustomMembers)

        
        /// <summary>
        /// Сделано.
        /// </summary>
        // *** Start programmer edit section *** (Пункт.Сделано CustomAttributes)

        // *** End programmer edit section *** (Пункт.Сделано CustomAttributes)
        public virtual bool Сделано
        {
            get
            {
                // *** Start programmer edit section *** (Пункт.Сделано Get start)

                // *** End programmer edit section *** (Пункт.Сделано Get start)
                bool result = this.fСделано;
                // *** Start programmer edit section *** (Пункт.Сделано Get end)

                // *** End programmer edit section *** (Пункт.Сделано Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Пункт.Сделано Set start)

                // *** End programmer edit section *** (Пункт.Сделано Set start)
                this.fСделано = value;
                // *** Start programmer edit section *** (Пункт.Сделано Set end)

                // *** End programmer edit section *** (Пункт.Сделано Set end)
            }
        }
        
        /// <summary>
        /// Пункт.
        /// </summary>
        // *** Start programmer edit section *** (Пункт.Работа CustomAttributes)

        // *** End programmer edit section *** (Пункт.Работа CustomAttributes)
        [NotNull()]
        public virtual IIS.T.Работа Работа
        {
            get
            {
                // *** Start programmer edit section *** (Пункт.Работа Get start)

                // *** End programmer edit section *** (Пункт.Работа Get start)
                IIS.T.Работа result = this.fРабота;
                // *** Start programmer edit section *** (Пункт.Работа Get end)

                // *** End programmer edit section *** (Пункт.Работа Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Пункт.Работа Set start)

                // *** End programmer edit section *** (Пункт.Работа Set start)
                this.fРабота = value;
                // *** Start programmer edit section *** (Пункт.Работа Set end)

                // *** End programmer edit section *** (Пункт.Работа Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.T.Задание.
        /// </summary>
        // *** Start programmer edit section *** (Пункт.Задание CustomAttributes)

        // *** End programmer edit section *** (Пункт.Задание CustomAttributes)
        [Agregator()]
        [NotNull()]
        public virtual IIS.T.Задание Задание
        {
            get
            {
                // *** Start programmer edit section *** (Пункт.Задание Get start)

                // *** End programmer edit section *** (Пункт.Задание Get start)
                IIS.T.Задание result = this.fЗадание;
                // *** Start programmer edit section *** (Пункт.Задание Get end)

                // *** End programmer edit section *** (Пункт.Задание Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Пункт.Задание Set start)

                // *** End programmer edit section *** (Пункт.Задание Set start)
                this.fЗадание = value;
                // *** Start programmer edit section *** (Пункт.Задание Set end)

                // *** End programmer edit section *** (Пункт.Задание Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПунктE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПунктE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПунктE", typeof(IIS.T.Пункт));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Пункт.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfПункт CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfПункт CustomAttributes)
    public class DetailArrayOfПункт : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.T.DetailArrayOfПункт members)

        // *** End programmer edit section *** (IIS.T.DetailArrayOfПункт members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Пункт by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Пункт.
        /// </summary>
        public DetailArrayOfПункт(IIS.T.Задание fЗадание) : 
                base(typeof(Пункт), ((ICSSoft.STORMNET.DataObject)(fЗадание)))
        {
        }
        
        public IIS.T.Пункт this[int index]
        {
            get
            {
                return ((IIS.T.Пункт)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.T.Пункт dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
