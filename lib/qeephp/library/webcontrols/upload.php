<?php
// $Id: upload.php 2014 2009-01-08 19:01:29Z dualface $

/**
 * 定义 Control_Upload  类
 *
 * @link http://qeephp.com/
 * @copyright Copyright (c) 2006-2009 Qeeyuan Inc. {@link http://www.qeeyuan.com}
 * @license New BSD License {@link http://qeephp.com/license/}
 * @version $Id: upload.php 2014 2009-01-08 19:01:29Z dualface $
 * @package webcontrols
 */

/**
 * 构造一个上传文件选择框
 *
 * @author YuLei Liao <liaoyulei@qeeyuan.com>
 * @version $Id: upload.php 2014 2009-01-08 19:01:29Z dualface $
 * @package webcontrols
 */
class Control_Upload extends Control_Input_Abstract
{
	function render()
	{
		return $this->_make('file');
	}
}


